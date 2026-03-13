import mongoose from "mongoose";

const hintSchema = new mongoose.Schema({
  problemId: {
    type: String,
    required: true
  },

  language: {
    type: String,
    required: true
  },

  hintLevel: {
    type: Number,
    required: true
  },

  hintText: {
    type: String,
    required: true
  },

  starterCode: {
    type: String,
    default: ""
  },

  constraints: {
    type: String,
    default: ""
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Hint = mongoose.model("Hint", hintSchema);

export default Hint;