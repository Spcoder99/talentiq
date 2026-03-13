import express from "express";
import { submitCode } from "../controllers/submissionController.js";

const subRouter = express.Router();

subRouter.post("/", submitCode);

export default subRouter;