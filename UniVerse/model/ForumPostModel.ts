import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {IForumPostModel} from '../interfaces/IForumPostModel';


let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class ForumPostModel {
    public schema:any;
    public model:any;
    private static instance: ForumPostModel;

    public constructor() {
        this.createSchemas();
        this.createModel();
    }

    // Get the singleton instance
    public static getInstance(): ForumPostModel {
        if (!ForumPostModel.instance) {
        ForumPostModel.instance = new ForumPostModel();
        }
        return ForumPostModel.instance;
    }

    public createSchemas(): void {
        this.schema = new Mongoose.Schema(
            {
                id: {type: String, required: true},
                accountId: {type: String, required: true},
                title: {type: String, required: true},
                author: {type: String, required: true},
                isAnonymous: {type: Boolean, required: true},
                isEdited: {type: Boolean, required: true},
                description: {type: String, required: true},
                dateTime: {type: Date, required: true},
                likes: {type: Number, required: true},
                dislikes: {type: Number, required: true},
                comments: {type: [String], required: true}
            }, {collection: 'forumposts'}
        );
    }

    public createModel(): void{
        this.model = mongooseConnection.model<IForumPostModel>("ForumPosts", this.schema);
    }

    
    async createForumPost(forumpostData: Object): Promise<any>{
        const forumpost = new this.model(forumpostData);
        return forumpost.save((err, forumpost) => {
            if(err){
                console.log("Error saving forumpost");
            } else {
                console.log("ForumPost saved successfully");
            }
        });
    }
    
    public updateForumPost(response: any, filter:Object): any{
        var query = this.model.findOne(filter);
        query.exec((err, forumpost) => {
            if(err){
                console.log("Error finding forumpost");
            } else {
                forumpost.title = response.title;
                forumpost.author = response.author;
                forumpost.isAnonymous = response.isAnonymous;
                forumpost.likes = response.likes;
                forumpost.dislikes = response.dislikes;
                forumpost.comments = response.comments;
                forumpost.save((err, forumpost) => {
                    if(err){
                        console.log("Error saving forumpost");
                    } else {
                        console.log("ForumPost saved successfully");
                        response.json(forumpost);

                    }
                });
            }
        });
    }

    public deleteForumPost(response: any, filter:Object): any{
        var query = this.model.findOne(filter);
        query.exec((err, forumpost) => {
            if(err){
                console.log("Error finding forumpost");
            } else {
                forumpost.remove((err, post) => {
                    if(err){
                        console.log("Error deleting forumpost");
                    } else {
                        console.log("ForumPost deleted successfully");
                    }
                });
            }
        });
    }

    public viewForumPost(response: any, filter:Object){
        var query = this.model.findOne(filter);
        query.exec((err, forumpost) => {
            if(err){
                console.log("Error finding forumpost");
            } else {
                console.log("ForumPost found");
                response.json(forumpost);
            }
        });
    }
    public retrieveAllMyForumPosts(response: any, filter:Object): any{
        console.log("id:" + filter)
        var query = this.model.find(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveAllForumPosts(response: any){
        var query = this.model.find({});
        query.exec( (err, forumpostArray) => {
            if (err){
                console.log(err);
            }
            response.json(forumpostArray) ;
        });
    }

    public updateForumPostComment(response: any, forumpostId: String, commentId: string) {
        // Define the query to find the forumpost object with the specified 'forumpostId'
        const filter = { id: forumpostId };
      
        // Define the update operation using the $push operator to append the 'commentId' to the 'comments' array
        const update = { $push: { comments: commentId } };
      
        // Use the findOneAndUpdate() method to perform the update operation on the forumpost object matching the query
        this.model.findOneAndUpdate(filter, update, { new: true }, (err, forumpost) => {
          if (err) {
            // Handle the error
            console.error(err +"\n"+ 'An error occurred while updating the forumpost');
          } else if (!forumpost) {
            // Handle the case where no post was found with the specified 'postId'
            console.error(err +"\n"+ `No post was found with forumpostId ${forumpostId}`);
          } else {
            // Return the updated forumpost object
            console.log(forumpost)
          }
        });
      }


    public retrieveForumPostsDetails(response:any, filter:Object) {
        var query = this.model.findOne(filter);
        query.exec( (err, forumpostArray) => {
            response.json(forumpostArray);
        });
    }
}
export {ForumPostModel};