import mongoose from "mongoose";
import { ENV } from "../lib/env.js";
import { PROBLEMS } from "../data/problems.js";
import FullCode from "../models/FullCodeSchema.js";

const seedFullCode = async () => {
  await mongoose.connect(ENV.DB_URL);
  await FullCode.deleteMany();

  const data = [];
  for (const problem of Object.values(PROBLEMS)) {
    for (const lang of ["javascript","python","java"]) {
      data.push({
        problemId: problem.id,
        language: lang,
        fullCode: problem.starterCode[lang] // replace with real AI full code later
      });
    }
  }

  await FullCode.insertMany(data);
  console.log("FullCode inserted!");
  process.exit();
};

seedFullCode();