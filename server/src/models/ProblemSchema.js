import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({

  id: {
    type: String,
    unique: true
  },

  title: String,

  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"]
  },

  category: String,

  importanceScore: {
  type: Number,
  default: 0
},

  description: {
    text: String,
    notes: [String]
  },

  examples: [
    {
      input: String,
      output: String,
      explanation: String
    }
  ],

  constraints: [String],

  

  starterCode: {
    javascript: String,
    python: String,
    java: String
  },

  expectedOutput: {
    javascript: String,
    python: String,
    java: String
  }

});

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;