import { requireAuth } from "@clerk/express";
import User from "../models/User.js";


export const protectRoute = [
    requireAuth(),
    async (req, res, next) => {
        try {
            const clerkId = req.auth().userId;

            if (!clerkId) {
                return res.status(401).json({ message: "Unauthorized - invalid token" });
            }

            // find user in db by clerk id
            const user = await User.findOne({ clerkId });

            console.log(user, "user in protectRoute middleware");

            if (!user) {
                return res.status(404).json({ message: "Unauthorized - user not found" });
            }

            // attach user to request object for use in route handlers
            req.user = user; 
            next();
        } catch (error) {
            console.error("💥Error in protectRoute middleware", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
]; 