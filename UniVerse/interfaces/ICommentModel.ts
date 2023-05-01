import Mongoose = require("mongoose");

interface ICommentModel extends Mongoose.Document {
    id: String,
    postId: Number,
    author: String,
    description: String,
    commentDate: Date,
    likes: Number,
    dislikes: Number
}
export {ICommentModel};