import Mongoose = require("mongoose");

interface IPostModel extends Mongoose.Document {
    id: String,
    accountId: Number,
    title: String,
    author: String,
    isAnonymous: Boolean,
    likes: Number,
    dislikes: Number,
    comments: [String]
}
export {IPostModel};