import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import { ICommentModel } from "../interfaces/ICommentModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class CommentModel {
    public schema:any;
    public model:any;


    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                id: String,
                postId: Number,
                author: String,
                description: String,
                commentDate: Date,
                likes: Number,
                dislikes: Number
            }, {collection: 'comment'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ICommentModel>("Comment", this.schema);
    }

    public addComment(response: any): any{}
    public viewAllComments(response: any): any{}
    
}
export {CommentModel};