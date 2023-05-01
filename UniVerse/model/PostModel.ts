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
                accountId: Number,
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

    public createPost(response: any, newPostData: any): void {
        const newPost = new this.model(newPostData);
    
        newPost.save((err: any, post: any) => {
            if (err) {
                response.status(500).send(err);
            } else {
                response.json(post);
            }
        });
    }

    public updatePost(response: any){}
    public deletePost(response: any){}
    public viewPost(response: any){}
    public viewAllPosts(response: any){}
}
export {PostModel};