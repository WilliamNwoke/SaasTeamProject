import Mongoose = require("mongoose");

interface ICommentModel extends Mongoose.Document {
    coommentId: number;
    postId: number;
    author: string;
    description: string;
    commentDate: Date;
    likes: number;
    dislikes: number;
}
export {ICommentModel};