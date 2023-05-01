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
        }, { collection: 'accounts' } // TODO: review what this line is for
        );
    };
    AccountModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Accounts", this.schema);
    };
    AccountModel.prototype.createAccount = function () {
    };
    AccountModel.prototype.viewAccount = function () {
    };
    return AccountModel;
}());
exports.AccountModel = AccountModel;
