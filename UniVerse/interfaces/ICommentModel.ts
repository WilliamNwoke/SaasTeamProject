import Mongoose = require("mongoose");
import { ForumPostModel } from "../model/ForumPostModel";
interface ICommentModel extends Mongoose.Document {
    id: String,
    forumpostId: String,
    author: String,
    description: String,
    dateTime: Date,
    likes: Number,
    dislikes: Number
}
export {ICommentModel};