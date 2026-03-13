import mongoose from "mongoose";
import dotenv from "dotenv";
import Hint from "../models/HintSchema.js";
import FullCode from "../models/FullCodeSchema.js";
// import { hintsStarterCodeData } from "../data/hintsStarterCodeData.js";
// import fullCodeDummyData from "../data/fullCodeDummyData.js";
import { hintsStarterCodeData } from "../data/hintStarterCode.js";
import fullCodeDummyData from "../data/fullCode.js";

dotenv.config();

const DB_URL = process.env.DB_URL;

// Helper to insert hints
async function insertHints() {
  for (const problemId in hintsStarterCodeData) {
    const hintsArray = hintsStarterCodeData[problemId];
    for (const hint of hintsArray) {
      await Hint.create(hint);
      console.log(`✅ Hint inserted: ${problemId} (${hint.language}, level ${hint.hintLevel})`);
    }
  }
}

// Helper to insert full code
async function insertFullCode() {
  for (const problemId in fullCodeDummyData) {
    const codeArray = fullCodeDummyData[problemId];
    for (const code of codeArray) {
      await FullCode.create({ problemId, ...code });
      console.log(`✅ Full code inserted: ${problemId} (${code.language})`);
    }
  }
}

async function seed() {
  try {
    await mongoose.connect(DB_URL);
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    await Hint.deleteMany();
    await FullCode.deleteMany();
    console.log("🧹 Cleared old hints and full code");

    // Insert dummy data
    await insertHints();
    await insertFullCode();

    console.log("🎉 Dummy data seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding dummy data:", err);
    process.exit(1);
  }
}

seed();