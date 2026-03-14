import express from "express";
import { createSession, endSession, getActiveSession, getMyRecentSessions, getSessionById, joinSession } from "../controllers/sessionController.js";
import { protectRoute } from "../middleware/protectRoute.js";


const sessionRouter = express.Router();

sessionRouter.post("/", protectRoute, createSession);
sessionRouter.get("/active", protectRoute, getActiveSession);
sessionRouter.get("/my-recent", protectRoute, getMyRecentSessions);
sessionRouter.get("/:id", protectRoute, getSessionById);
sessionRouter.post("/:id/join", protectRoute, joinSession);
sessionRouter.post("/:id/end", protectRoute, endSession);



export default sessionRouter;