import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import { ICommentModel } from "../interfaces/ICommentModel";
import { PostModel } from "./PostModel";

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
                postId: Mongoose.Types.ObjectId,
                author: String,
                description: String,
                commentDate: Date,
                likes: Number,
                dislikes: Number
            }, {collection: 'comments'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ICommentModel>("Comments", this.schema);
    }

    public addComment(response: any, filter:Object): any{}
    public retrieveAllComments(response: any): any{
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
    
}
export {CommentModel};