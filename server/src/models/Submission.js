import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  problem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Problem",
  },

  code: {
    type: String,
    required: true,
  },

  language: {
    type: String,
    default: "javascript",
  },

  status: {
    type: String,
    enum: ["accepted", "wrong", "error"],
    default: "accepted",
  }

}, { timestamps: true });

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;