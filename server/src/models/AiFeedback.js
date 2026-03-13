
import mongoose from "mongoose";

const aiFeedbackSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    session: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session"
    },

    feedback: {
        communication: Number,
        coding: Number,
        problemSolving: Number,
        overallScore: Number,
        suggestions: String
    }

});

const AiFeedback = mongoose.model("AiFeedback", aiFeedbackSchema);

export default AiFeedback;