
// backend/routes/executeRoutes.js
import express from "express";
import fetch from "node-fetch"; // Node >=18 optional

const router = express.Router();

// Judge0 CE language IDs
const LANGUAGE_ID_MAP = {
  javascript: 63, // Node.js 18
  python: 71,     // Python 3
  java: 62,       // Java 17
};

router.post("/", async (req, res) => {
  const { language, code, input } = req.body;

  if (!language || !code) {
    return res.status(400).json({ error: "language and code required" });
  }

  const languageId = LANGUAGE_ID_MAP[language];
  if (!languageId) return res.status(400).json({ error: "Unsupported language" });

  try {
    const response = await fetch("https://ce.judge0.com/submissions?base64_encoded=false&wait=true", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language_id: languageId,
        source_code: code,
        stdin: input || "",
      }),
    });

    const data = await response.json();

    if (data?.stderr || data?.compile_output) {
      return res.json({
        success: false,
        output: data?.stdout || "",
        error: data?.stderr || data.compile_output,
      });
    }

 

    res.json({ success: true, output: data?.stdout || "" });

  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

export default router;