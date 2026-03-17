import mongoose from 'mongoose';


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        profileImage: {
            type: String,
            default: "",
        },
        clerkId: {
            type: String,
            required: true,
            unique: true,
        }
    },
    {timestamps: true} // createdAt, updatedAt
);


const User = mongoose.model("User", userSchema)



export default User;

// import mongoose from "mongoose";



// const userSchema = new mongoose.Schema(
// {
//     name: String,
//     email: String,
//     profileImage: String,
//     clerkId: String,

//     solvedProblems: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Problem"
//     }],

//     interviewScore: {
//         type: Number,
//         default: 0
//     },

//     totalSessions: {
//         type: Number,
//         default: 0
//     },

//     preferredDifficulty: {
//         type: String,
//         enum: ["easy","medium","hard"],
//         default: "easy"
//     },

//     skills: {
//         algorithms: { type: Number, default: 0 },
//         dataStructures: { type: Number, default: 0 },
//         problemSolving: { type: Number, default: 0 }
//     }

// },
// { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);

// export default User;