import mongoose from "mongoose";

const fullCodeSchema = new mongoose.Schema({
  problemId: { type: String, required: true },
  language: { type: String, required: true },
  fullCode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const FullCode = mongoose.model("FullCode", fullCodeSchema);
export default FullCode;