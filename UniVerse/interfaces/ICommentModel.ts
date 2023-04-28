import Mongoose = require("mongoose");

interface ICommentModel extends Mongoose.Document {
    commentId: number;
    postId: number;
    author: string;
    description: string;
    commentDate: any;
    likes: number;
    dislikes: number;
}
export {ICommentModel};