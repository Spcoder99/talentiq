import axios from "axios";
import Hint from "../models/HintSchema.js";
import prettier from "prettier";

/* =========================
   MODEL & CONFIG
========================= */
const HINT_MODEL = "phi3:latest"; // single model for everything
const OLLAMA_URL = "http://127.0.0.1:11434/api/generate";
const AI_TIMEOUT = 120000; // 2 minutes

/* =========================
   LOGGER
========================= */
function log(...args) {
  console.log("[AI_CONTROLLER]", ...args);
}

/* =========================
   FORMAT CODE
========================= */
async function formatCode(code, language) {
  try {
    if (language === "javascript") {
      return await prettier.format(code, { parser: "babel", semi: true, singleQuote: true });
    }
    return code;
  } catch {
    return code;
  }
}

/* =========================
   CLEAN CODE
========================= */
function cleanCode(code = "") {
  if (Array.isArray(code)) code = code.join("\n"); // handle array
  if (typeof code !== "string") code = "";          // fallback for unexpected types
  return code.replace(/```[a-zA-Z]*\n?/g, "").replace(/```/g, "").trim();
}

/* =========================
   VALIDATE STARTER
========================= */
function validateStarter(code, language) {
  if (!code) return false;
  if (language === "javascript" && !code.includes("function")) return false;
  if (language === "python" && !code.includes("def ")) return false;
  if (language === "java" && !code.includes("class")) return false;
  return true;
}

/* =========================
   EXTRACT JSON (for hints)
========================= */
function extractJSON(text) {
  try {
    const clean = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const start = clean.indexOf("{");
    const end = clean.lastIndexOf("}");
    if (start === -1 || end === -1) return null;
    const jsonString = clean.slice(start, end + 1);
    return JSON.parse(jsonString);
  } catch (e) {
    log("Failed to parse JSON:", e.message);
    return null;
  }
}

/* =========================
   EXTRACT CODE BLOCK (for full code)
========================= */
function extractCodeFromBlock(text) {
  const match = text.match(/```(?:\w+)?\n([\s\S]*?)```/);
  if (match) return match[1].trim();
  return text.trim();
}

/* =========================
   STARTER TEMPLATES
========================= */
function getStarterTemplate(language) {
  const templates = {
    javascript: `function solve(input) {
  // TODO: implement solution logic
  return null;
}
// Example
console.log(solve([1,2,3]));`,
    python: `def solve(input):
    # TODO: implement solution logic
    pass
print(solve([1,2,3]))`,
    java: `public class Solution {
    public static int solve(int[] input){
        // TODO: implement solution logic
        return 0;
    }
    public static void main(String[] args){
        System.out.println(solve(new int[]{1,2,3}));
    }
}`
  };
  return templates[language] || "";
}

/* =========================
   REQUEST VALIDATION
========================= */
function validateRequest(body) {
  const required = ["problemId", "problemDescription", "language", "action"];
  for (const field of required) if (!body[field]) return `${field} is required`;
  return null;
}

/* =========================
   CALL AI
========================= */
async function callAI(prompt, model = HINT_MODEL, retries = 2) {
  for (let i = 0; i <= retries; i++) {
    try {
      const response = await axios.post(
        OLLAMA_URL,
        {
          model,
          prompt,
          stream: false,
          options: { temperature: 0, num_predict: 970, top_p: 0.9, repeat_penalty: 1.1 }
        },
        { timeout: AI_TIMEOUT }
      );

      log("AI RESPONSE:", response.data);

      if (response.data?.response) return response.data.response.trim();
    } catch (err) {
      log("AI ERROR:", err.response?.data || err.message);
    }
  }
  return "";
}

/* =========================
   GET HINT / FULL CODE CONTROLLER
========================= */
export const getHint = async (req, res) => {
  try {
    const validationError = validateRequest(req.body);
    if (validationError) return res.status(400).json({ error: validationError });

    const {
      problemId,
      problemDescription,
      language,
      constraints,
      expectedOutput,
      action,
      difficulty,
      examples,
      category
    } = req.body;

    const starterTemplate = getStarterTemplate(language);

    // =========================
    // HINT ACTION
    // =========================
    if (action === "hint") {
      const existingHints = await Hint.find({ problemId, language }).sort({ hintLevel: 1 }).limit(2);
      if (existingHints.length > 0) {
        return res.json({
          hint: existingHints.map(h => h.hintText).join("\n"),
          starterCode: existingHints[0].starterCode || starterTemplate
        });
      }

      const prompt = `
You are a competitive programming mentor.

Problem:
${problemDescription}

Language: ${language}
Difficulty: ${difficulty}
Category: ${category}

Examples:
${examples?.map(e => `Input: ${e.input} Output: ${e.output}`).join("\n") || ""}

Constraints:
${constraints}

Expected Output:
${expectedOutput}

Return STRICT JSON ONLY:
{
  "hint1":"conceptual idea",
  "hint2":"optimal algorithm approach",
  "starterCode":"complete runnable ${language} skeleton"
}

Rules:
- Do NOT solve the problem
- starterCode must compile
- include function/class definition
- include example usage
- add TODO comments
- be concise and helpful and guide towards the solution without giving it away
-It Should be the MOST optimal starter code that gives a strong hint towards the solution without being too direct.
-It's Syntax should be correct and it should compile without errors for my video call interview platform monaco editor.
`;

      const raw = await callAI(prompt);

      let hint1 = "Break the problem into logical steps.";
      let hint2 = "Think about optimal algorithm patterns.";
      let starterCode = starterTemplate;

      const parsed = extractJSON(raw);
      if (parsed) {
        hint1 = parsed.hint1 || hint1;
        hint2 = parsed.hint2 || hint2;
        starterCode = parsed.starterCode || starterTemplate;
        if (parsed.starterCode?.code) starterCode = parsed.starterCode.code; // handle array
      }

      starterCode = cleanCode(starterCode);
      if (!validateStarter(starterCode, language)) starterCode = starterTemplate;

      const hints = [`Hint 1: ${hint1}`, `Hint 2: ${hint2}`];

      await Hint.insertMany([
        { problemId, language, hintLevel: 1, hintText: hints[0], starterCode },
        { problemId, language, hintLevel: 2, hintText: hints[1], starterCode }
      ]);

      starterCode = await formatCode(starterCode, language);
      return res.json({ hint: hints.join("\n"), starterCode });
    }

    // =========================
    // FULL CODE ACTION
    // =========================
    if (action === "fullcode") {
      const prompt = `
You are a senior competitive programmer.

Solve the problem with the MOST optimal solution.

Problem:
${problemDescription}

Language:
${language}

Examples:
${examples?.map(e => `Input: ${e.input} Output: ${e.output}`).join("\n") || ""}

Constraints:
${constraints}

Difficulty: ${difficulty}
Category: ${category}

Expected Output:
${expectedOutput}

Rules:
- return ONLY code
- must compile
- must handle edge cases
- must be optimal time complexity
-It's Syntax should be correct and it should compile without errors for my video call interview platform monaco editor.
- Do NOT include explanations or comments that directly give away the solution.
- Include only minimal comments that hint towards the approach without revealing it.
- Include example usage at the bottom of the code in a comment block.
- dont give any unnecessary thing that is not required to solve the problem or give errors on my video call interview platform which is using monaco editor.
`;

      const raw = await callAI(prompt);

      let fullCode = extractCodeFromBlock(raw);

      if (!validateStarter(fullCode, language)) fullCode = starterTemplate;

      fullCode = await formatCode(fullCode, language);
      return res.json({ fullCode });
    }

    return res.status(400).json({ error: "Invalid action type" });
  } catch (err) {
    log("Controller error:", err);
    return res.status(500).json({ error: "Failed to generate AI response" });
  }
};