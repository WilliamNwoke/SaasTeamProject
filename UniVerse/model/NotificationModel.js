"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var NotifcationModel = /** @class */ (function () {
    function NotifcationModel() {
        this.createSchema();
        this.createModel();
    }
    NotifcationModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            id: String,
            postId: Number,
            author: String,
            description: String,
            commentDate: Date,
            likes: Number,
            dislikes: Number
        }, { collection: 'notifications' });
    };
    NotifcationModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Notifcations", this.schema);
    };
    NotifcationModel.prototype.createNotification = function () { };
    NotifcationModel.prototype.removeNotification = function () { };
    NotifcationModel.prototype.viewNotification = function () { };
    NotifcationModel.prototype.viewAllNotifications = function () { };
    NotifcationModel.prototype.notificationTimer = function () { };
    return NotifcationModel;
}());
