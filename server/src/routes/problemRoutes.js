import express from "express";
import { getProblems } from "../controllers/problemController.js";
import { getAIRecommendedProblems } from "../controllers/aiRecProb.js";

const router = express.Router();

router.get("/", getProblems);
router.get("/ai-recommended", getAIRecommendedProblems)

export default router;