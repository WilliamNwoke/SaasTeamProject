import Mongoose = require("mongoose");

interface INotificationModel extends Mongoose.Document {
    id: number;
    postId: number;
    author: string;
    description: string;
    commentDate: any;
    likes: number;
    dislikes: number;
}
export {INotificationModel};