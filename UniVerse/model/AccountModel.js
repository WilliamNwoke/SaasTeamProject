"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var AccountModel = /** @class */ (function () {
    function AccountModel() {
        this.createSchema();
        this.createModel();
    }
    AccountModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            id: String,
            username: String,
            fname: String,
            lname: String,
            email: String,
            department: String
        }, { collection: 'account' } // TODO: review what this line is for
        );
    };
    //  accountDocument = IaccountModel 
    // Account = Mongoose.model<IaccountModel> = this.model
    AccountModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Accounts", this.schema);
    };
    AccountModel.prototype.createAccount = function (accountData) {
        var newAccount = new this.model(accountData);
        newAccount.save(function (err, savedAccount) {
            console.log("account saved");
            accountData.json(savedAccount);
        });
    };
    AccountModel.prototype.viewAccount = function (accountId) {
        var query = this.model.findOne({ _id: accountId });
        query.exec(function (err, userAccount) {
            console.log("Username is " + userAccount);
            accountId.json(userAccount);
        });
    };
    return AccountModel;
}());
exports.AccountModel = AccountModel;
