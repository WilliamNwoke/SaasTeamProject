import Mongoose = require("mongoose");

interface IPostModel extends Mongoose.Document {
    id: number;
    accountId: number;
    title: string;
    author: string;
    isAnonymous: boolean;
    likes: number;
    dislikes: number;
    comments: string[];
}
export {IPostModel};