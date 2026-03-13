
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    title: String,

    content: String,

    upvotes: {
        type: Number,
        default: 0
    },

    tags: [String]


}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;