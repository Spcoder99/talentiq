import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { sessionApi } from "../api/sessions";
import { toast } from "react-hot-toast";
import axios from "axios";


// CREATE SESSION
export const useCreateSession = () => {

    const result = useMutation({
        mutationKey: ["createSession"],
        mutationFn: sessionApi.createSession,

        onSuccess: () => {
            toast.success("Session created successfully");
        },

        onError: (error) => {
            toast.error(
                error.response?.data?.message || "Failed to create room"
            );
        }
    });

    return result;
};



// ACTIVE SESSIONS
export const useActiveSessions = () => {

    const result = useQuery({
        queryKey: ["activeSessions"],
        queryFn: sessionApi.getActiveSessions,
    });

    return result;
};



// RECENT SESSIONS
export const useMyRecentSessions = () => {

    const result = useQuery({
        queryKey: ["myRecentSessions"],
        queryFn: sessionApi.getMyRecentSessions,
    });

    return result;
};



// SESSION BY ID
export const useSessionById = (sessionId) => {

    const result = useQuery({
        queryKey: ["session", sessionId],
        queryFn: () => sessionApi.getSessionById(sessionId),

        enabled: !!sessionId,

        // auto refresh session state
        refetchInterval: 5000,
    });

    return result;
};



// JOIN SESSION (PUBLIC + PRIVATE)
export const useJoinSession = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationKey: ["joinSession"],

        mutationFn: async ({ id, inviteCode = null }) => {

            if (!id) throw new Error("Session id missing");

const res = await axios.post(
  `${import.meta.env.VITE_API_BASE_URL}/sessions/${id}/join`,
  { inviteCode },
  { withCredentials: true }
);
            return res.data;
        },

        onSuccess: () => {

            toast.success("Joined session successfully");

            // // refresh dashboard + session data
            // queryClient.invalidateQueries(["activeSessions"]);
            // queryClient.invalidateQueries(["session"]);


            queryClient.invalidateQueries({ queryKey: ["activeSessions"] });
            queryClient.invalidateQueries({ queryKey: ["session"] });
        },

        onError: (error) => {

            toast.error(
                error.response?.data?.message || "Failed to join session"
            );

        }
    });

};



// END SESSION
export const useEndSession = () => {

    const result = useMutation({

        mutationKey: ["endSession"],
        mutationFn: sessionApi.endSession,

        onSuccess: () => {
            toast.success("Session ended successfully");
        },

        onError: (error) => {
            toast.error(
                error.response?.data?.message || "Failed to end session"
            );
        }
    });

    return result;
};