// import mongoose from "mongoose";

// const sessionSchema = new mongoose.Schema({
//     problem: {
//         type: String,
//         required: true,
//     },
//     difficulty: {
//         type: String,
//         enum: ["easy", "medium", "hard"],
//         required: true,
//     },

//     host: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: true,
//     },

//     participant: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         default: null,
//     },
//     status: {
//         type: String,
//         enum: ["active", "completed"],
//         default: "active",
//     },
//     // stream video call Id 
//     callId: {
//         type: String,
//         default: "",
//     },
// }, { timestamps: true });


// const Session = mongoose.model("Session", sessionSchema);

// export default Session;

import mongoose from "mongoose";


const sessionSchema = new mongoose.Schema({

    problem: String,

    difficulty: {
        type: String,
        enum: ["easy","medium","hard"]
    },

    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    participant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    status: {
        type: String,
        enum: ["active","completed"],
        default: "active"
    },

    callId: String,

    codeSubmitted: {
        type: Boolean,
        default: false
    },

    result: {
        type: String,
        enum: ["pass","fail","pending"],
        default: "pending"
    },

    duration: {
        type: Number,
        default: 0
    },

    aiFeedback: {
        communication: Number,
        coding: Number,
        problemSolving: Number,
        overall: Number,
        notes: String
    }

}, { timestamps: true });

const Session = mongoose.model("Session", sessionSchema);

export default Session;