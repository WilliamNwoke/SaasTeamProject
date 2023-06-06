"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var ForumPostModel_1 = require("./ForumPostModel");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var AccountModel = /** @class */ (function () {
    function AccountModel() {
        this.createSchema();
        this.createModel();
        this.ForumPosts = ForumPostModel_1.ForumPostModel.getInstance();
    }
    AccountModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            id: { type: String, required: true },
            username: { type: String, required: true },
            fname: { type: String, required: true },
            lname: { type: String, required: true },
            email: { type: String, required: true },
            oAuthId: { type: String, required: false },
            department: { type: String, required: true }
        }, { collection: 'accounts' } // TODO: review what this line is for
        );
    };
    //  accountDocument = IaccountModel 
    // Account = Mongoose.model<IaccountModel> = this.model
    AccountModel.prototype.createModel = function () {
        console.log("Inside createModel");
        this.model = mongooseConnection.model("Accounts", this.schema);
    };
    AccountModel.prototype.updateAccountOauth = function (response, acctEmail, acctoauthId) {
        var filter = { email: acctEmail };
        var update = { $set: { oauthId: acctoauthId } };
        this.model.findOneandUpdate(filter, update, { new: true }, function (err, userAccount) {
            if (err) {
                console.error("cannot update acocunt");
            }
            else {
                console.log("Account updated");
            }
        });
    };
    AccountModel.prototype.viewAccount = function (response, filter) {
        console.log("id: " + filter);
        var query = this.model.findOne(filter);
        query.exec(function (err, userAccount) {
            response.json(userAccount);
        });
    };
    AccountModel.prototype.viewProfile = function (res, filter) {
        console.log("id: " + filter);
        var query = this.model.findOne(filter);
        query.exec(function (err, userAccount) {
            if (err) {
                console.error("Error: " + err);
                res.status(500).json({ error: "Internal server error" });
            }
            else if (userAccount) {
                // const accountId = userAccount.accountId; // Assuming the account ID property is called 'accountId'
                console.log("Got userAccount.id: " + userAccount.id);
                res.json(userAccount);
            }
            else {
                res.status(404).json({ error: "Account not found" });
            }
        });
    };
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
    AccountModel.prototype.validateAccount = function (res, accountId, oAuthID) {
        var _this = this;
        console.log("");
        console.log("accountId: " + accountId);
        console.log("oAuthID: " + oAuthID);
        var query = this.model.findOne({ oAuthId: oAuthID, id: accountId });
        console.log("Query: " + query);
        query.exec(function (err, userAccount) {
            if (err) {
                console.log("Error: " + err);
                res.redirect('/#/postIndex');
            }
            else if (userAccount) {
                console.log("All is good");
                _this.ForumPosts.retrieveAllMyForumPosts(res, { accountId: accountId });
            }
            else {
                console.log("Too bad.");
                res.redirect('/#/postIndex');
            }
        });
    };
    return AccountModel;
}());
exports.AccountModel = AccountModel;
