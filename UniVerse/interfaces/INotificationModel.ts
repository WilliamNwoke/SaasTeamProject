import Mongoose = require("mongoose");

interface INotificationModel extends Mongoose.Document {
    id: String,
    postId: Number,
    author: String,
    description: String,
    commentDate: Date,
    likes: Number,
    dislikes: Number
}
export {INotificationModel};