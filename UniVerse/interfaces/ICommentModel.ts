import Mongoose = require("mongoose");
import { PostModel } from "../model/PostModel";
interface ICommentModel extends Mongoose.Document {
    id: String,
    postId: Mongoose.Types.ObjectId | PostModel,
    author: String,
    description: String,
    commentDate: Date,
    likes: Number,
    dislikes: Number
}
export {ICommentModel};