import Mongoose = require("mongoose");
import { __String } from "typescript";

interface IPostModel extends Mongoose.Document {
    id: String,
    accountId: String,
    title: String,
    author: String,
    isAnonymous: Boolean,
    likes: Number,
    dislikes: Number,
    comments: [String]
}
export {IPostModel};