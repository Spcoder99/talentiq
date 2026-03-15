import { chatClient, streamClient } from "../lib/stream.js";
import Session from "../models/Session.js";


// export async function createSession(req, res) {
//     try {
//         const { problem, difficulty } = req.body;
//         const userId = req.user._id;
//         const clerkId = req.user.clerkId;
//         // validate problem and difficulty
//         if (!problem || !difficulty) {
//             return res.status(400).json({ msg: "problem and difficulty are required" });
//         }

//         // generate a unique call id for stream video call
//         const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;

//         // create session in db
//         const session = await Session.create({
//             problem,
//             difficulty,
//             host: userId,
//             callId,
//         });

//         // create stream video call
//         try {
//             await streamClient.video.call("default", callId).getOrCreate({
//                 data: {
//                     created_by_id: clerkId,
//                     custom: {
//                         problem,
//                         difficulty,
//                         sessionId: session._id.toString(),
//                     }
//                 }
//             });
//         } catch (error) {
//             console.error("Error creating Stream video call:", error.message);
//         }

//         // chat messaging
//         const channel = chatClient.channel("messaging", callId, {
//             name: `${problem} Session`,
//             created_by_id: clerkId,
//             members: [clerkId],
//         });

//         await channel.create();

//         res.status(201).json({ session });

//     } catch (error) {
//         console.log("Error in createSession:", error.message);
//         res.status(500).json({ message: "Internal Server error" });
//     }
// }

export async function createSession(req, res) {
    try {

        const { problem, difficulty, isPrivate } = req.body;

        const userId = req.user._id;
        const clerkId = req.user.clerkId;

        if (!problem || !difficulty) {
            return res.status(400).json({ msg: "problem and difficulty are required" });
        }

        const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;

        let inviteCode = null;

        if (isPrivate) {
            inviteCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        }

        const session = await Session.create({
            problem,
            difficulty,
            host: userId,
            callId,
            isPrivate,
            inviteCode
        });

        await streamClient.video.call("default", callId).getOrCreate({
            data: {
                created_by_id: clerkId,
                members: [{ user_id: clerkId }],
                custom: {
                    problem,
                    difficulty,
                    sessionId: session._id.toString(),
                }
            }
        });
        const channel = chatClient.channel("messaging", callId, {
            name: `${problem} Session`,
            created_by_id: clerkId,
            members: [clerkId],
        });

        await channel.create();

        res.status(201).json({ session });

    } catch (error) {
        console.log("Error in createSession:", error.message);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export async function getActiveSession(_, res) {
    try {
        const sessions = await Session.find({ status: "active" }).populate("host", "name profileImage email clerkId").populate("participant", "name profileImage email clerkId").sort({ createdAt: -1 }).limit(20);

        res.status(200).json({ sessions });

    } catch (error) {
        console.log("Error in getActiveSession Controller:", error.message);
        res.status(500).json({ message: "Internal Server error" });
    }
}



export async function getMyRecentSessions(req, res) {
    try {
        const userId = req.user._id;
        // fetch sessions where user is host or participant
        const sessions = await Session.find({
            status: "completed",
            $or: [{ host: userId }, { participant: userId }]
        }).sort({ createdAt: -1 }).limit(20);

        res.status(200).json({ sessions });
    } catch (error) {
        console.log("Error in getMyRecentSessions Controller:", error.message);
        res.status(500).json({ message: "Internal Server error" });
    }
}

export async function getSessionById(req, res) {
    try {
        const { id } = req.params;
        const session = await Session.findById(id).populate("host", "name  email profileImage clerkId").populate("participant", "name email profileImage clerkId");
        if (!session) {
            return res.status(404).json({ message: "Session not found" });
        }
        res.status(200).json({ session });
    } catch (error) {
        console.log("Error in getSessionById Controller:", error.message);
        res.status(500).json({ message: "Internal Server error" });
    }
}



export async function joinSession(req, res) {

    try {

        const { id } = req.params;
        const { inviteCode } = req.body;

        const userId = req.user._id;
        const clerkId = req.user.clerkId;

        const session = await Session.findById(id);

        if (!session) {
            return res.status(404).json({ message: "Session not found" });
        }

        if (session.status !== "active") {
            return res.status(400).json({ message: "Cannot join completed session" });
        }

        if (session.host.toString() === userId.toString()) {
            return res.status(400).json({ message: "Host cannot join" });
        }

        // PRIVATE SESSION VALIDATION
        if (session.isPrivate) {

            if (!inviteCode) {
                return res.status(401).json({ message: "Invite code required" });
            }

            if (inviteCode !== session.inviteCode) {
                return res.status(403).json({ message: "Invalid invite code" });
            }

        }

        if (session.participant) {
            return res.status(409).json({ message: "Session full" });
        }

        session.participant = userId;
        await session.save();

        const call = streamClient.video.call("default", session.callId);

        // fetch existing call data
        const callData = await call.get();

        const existingMembers = callData.call.members || [];

        // add new participant while keeping host
        await call.update({
            members: [
                ...existingMembers,
                { user_id: clerkId }
            ]
        });


        const channel = chatClient.channel("messaging", session.callId);
        await channel.addMembers([clerkId]);

        res.status(200).json({ session });

    } catch (error) {

        console.log("Error in joinSession:", error.message);

        res.status(500).json({ message: "Internal Server error" });

    }
}


export async function endSession(req, res) {

    try {
        const { id } = req.params;
        const userId = req.user._id;
        const session = await Session.findById(id);

        if (!session) {
            return res.status(404).json({ message: "Session not found" });
        }

        // check if user is host
        if (session.host.toString() !== userId.toString()) {
            return res.status(403).json({ message: "Only host can end the session" });
        }

        // check if session is already ended
        if (session.status === "completed") {
            return res.status(400).json({ message: "Session has already ended" });
        }

        // delete stream video call
        const call = streamClient.video.call("default", session.callId);
        await call.delete({ hard: true });

        // delete stream chat channel
        const channel = chatClient.channel("messaging", session.callId);
        await channel.delete();

        session.status = "completed";
        await session.save();


        res.status(200).json({ session, message: "Session ended successfully" });

    } catch (error) {
        console.log("Error in endSession Controller:", error.message);
        res.status(500).json({ message: "Internal Server error" });
    }
}