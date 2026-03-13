import mongoose from "mongoose";
import dotenv from "dotenv";
import Problem from "../models/ProblemSchema.js";
import { PROBLEMS } from "../data/problems.js";
import { ENV } from "../lib/env.js";

dotenv.config();

const seedProblems = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(ENV.DB_URL);
    console.log("Connected to MongoDB");

    // Clear existing problems
    await Problem.deleteMany();
    console.log("Cleared existing problems");

    // Convert object of objects into array
    const problemsArray = Object.values(PROBLEMS);

    // Insert all problems
    await Problem.insertMany(problemsArray);
    console.log("Problems inserted successfully");

  } catch (error) {
    console.error("Error seeding problems:", error);
  } finally {
    // Always close connection
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
    process.exit(0);
  }
};

seedProblems();