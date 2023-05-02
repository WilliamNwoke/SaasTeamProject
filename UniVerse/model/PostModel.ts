import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IPostModel} from '../interfaces/IPostModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class PostModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchemas();
        this.createModel();
    }

    public createSchemas(): void {
        this.schema = new Mongoose.Schema(
            {
                id: String,
                accountId: String,
                title: String,
                author: String,
                isAnonymous: Boolean,
                likes: Number,
                dislikes: Number,
                comments: [String]
            }, {collection: 'posts'}
        );
    }

    public createModel(): void{
        this.model = mongooseConnection.model<IPostModel>("Posts", this.schema);
    }

    public updatePost(response: any){}
    public deletePost(response: any){}
    public viewPost(response: any){}
    public retrieveAllPosts(response: any){
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
    public retrievePostsDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray);
        });
    }
}
export {PostModel};