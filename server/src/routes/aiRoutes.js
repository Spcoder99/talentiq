// routes/codeRoutes.js
import express from "express";
import Hint from "../models/HintSchema.js";
import FullCode from "../models/FullCodeSchema.js";

const aiRouter = express.Router();

/* =========================
   FETCH HINTS
========================= */
aiRouter.get("/hints/:problemId/:language", async (req, res) => {
  try {
    const { problemId, language } = req.params;

    console.log("Hints Request:", problemId, language);

    // Case-insensitive query
    let hints = await Hint.find({
      problemId: { $regex: `^${problemId}$`, $options: "i" },
      language: { $regex: `^${language}$`, $options: "i" }
    }).sort({ hintLevel: 1 });

    // Fallback if language-specific hints not found
    if (!hints.length) {
      hints = await Hint.find({
        problemId: { $regex: `^${problemId}$`, $options: "i" }
      }).sort({ hintLevel: 1 });
    }

    if (!hints.length) {
      return res.status(404).json({ error: "Hints not found" });
    }

    res.json({
      hints: hints.map(h => ({
        hintLevel: h.hintLevel,
        hintText: h.hintText
      })),
      starterCode: hints[0].starterCode
    });

  } catch (err) {
    console.error("Hints fetch error:", err);
    res.status(500).json({ error: "Failed to fetch hints" });
  }
});


/* =========================
   FETCH FULL CODE
========================= */
aiRouter.get("/fullcode/:problemId/:language", async (req, res) => {
  try {
    const { problemId, language } = req.params;

    console.log("FullCode Request:", problemId, language);

    const fullCode = await FullCode.findOne({
      problemId: { $regex: `^${problemId}$`, $options: "i" },
      language: { $regex: `^${language}$`, $options: "i" }
    });

    if (!fullCode) {
      return res.status(404).json({ error: "Full code not found" });
    }

    res.json({
      fullCode: fullCode.fullCode
    });

  } catch (err) {
    console.error("FullCode fetch error:", err);
    res.status(500).json({ error: "Failed to fetch full code" });
  }
});

export default aiRouter;