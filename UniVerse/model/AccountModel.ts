import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IAccountModel} from "../interfaces/IAccountModel";
import { ForumPostModel } from './ForumPostModel';
let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;


class AccountModel {
    public schema:any;
    public model:any;
    public ForumPosts:ForumPostModel;

    public constructor() {
        this.createSchema();
        this.createModel();
        this.ForumPosts = ForumPostModel.getInstance();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                id: {type: String, required: true},
                username: {type: String, required: true},
                fname: {type: String, required: true},
                lname: {type: String, required: true},
                email: {type: String, required: true},
                oAuthId: {type: String, required: false},
                imageUrl: {type: String, required: false},
                department: {type: String, required: true}
            }, {collection: 'accounts'} // TODO: review what this line is for
        );
    }

    //  accountDocument = IaccountModel 
    // Account = Mongoose.model<IaccountModel> = this.model

    public createModel(): void {
        console.log("Inside createModel")
        this.model = mongooseConnection.model<IAccountModel>("Accounts", this.schema);
    }

    public updateAccountOauth(response: any, acctEmail: string, acctoauthId: string): void {
        const filter = {email: acctEmail};

        const update = {$set: {oauthId: acctoauthId}};

        this.model.findOneandUpdate(filter, update, {new: true}, (err, userAccount) => {
            if (err) {
                console.error("cannot update acocunt");
            } else {
                console.log("Account updated");
            }     
        });
    }

    public viewAccount(response: any, filter: object) {
        console.log("id: " + filter)
        var query = this.model.findOne(filter);
        query.exec((err, userAccount) => {
            response.json(userAccount);
        });
    }

    public viewProfile(res: any, oAuthId: string, username: string, imageUrl: string) {
        console.log("id: " + oAuthId)
        var query = this.model.findOne({oAuthId: oAuthId});
        query.exec((err, userAccount) => {
          if (err) {
            console.error("Error: " + err);
            res.status(500).json({ error: "Internal server error" });
          } else if (userAccount) {
            // const accountId = userAccount.accountId; // Assuming the account ID property is called 'accountId'
            console.log("Got userAccount.id: "+ userAccount.id);
            userAccount.username = username;
            userAccount.imageUrl = imageUrl;
            console.log("User ImageUrl: " + userAccount.imageUrl);
            res.json(userAccount);
          } else {
            res.status(404).json({ error: "Account not found" });
          }
        });
      }
    

    // public validateAccount(res, accountId: string, oAuthID: string): void {
    //     console.log("");
    //     console.log("accountId: " + accountId);
    //     console.log("oAuthID: " + oAuthID);
      
    //     const query = this.model.findOne({ oAuthId: oAuthID, id: accountId });
    //     console.log("Query: " + query);
      
    //     query.exec((err, userAccount) => {
    //       if (err) {
    //         console.log("Error: " + err);
    //         res.redirect('/#/postIndex');
    //       } else if (userAccount) {
    //         console.log("All is good");
    //         this.ForumPosts.retrieveAllMyForumPosts(res, { accountId: accountId });
    //       } else {
    //         console.log("Too bad.");
    //         res.redirect('/#/postIndex');
    //       }
    //     });
    //   }

    public validateAccount(res, accountId: string, oAuthID: string): void {
      console.log("");
      console.log("accountId: " + accountId);
      console.log("oAuthID: " + oAuthID);
    
      const query = this.model.findOne({ oAuthId: oAuthID, id: accountId });
      console.log("Query: " + query);
    
      query.exec((err, userAccount) => {
        if (err) {
          console.log("Error: " + err);
          res.redirect('/#/postIndex');
        } else if (userAccount) {
          console.log("All is good");
          this.ForumPosts.retrieveAllMyForumPosts(res, { accountId: accountId });
        } else {
          console.log("Too bad.");
          res.redirect('/#/postIndex');
        }
      });
    }
           
      
}
export {AccountModel};