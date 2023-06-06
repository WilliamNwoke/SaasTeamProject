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
                console.log("ACcount updated");
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
    return AccountModel;
}());
exports.AccountModel = AccountModel;
