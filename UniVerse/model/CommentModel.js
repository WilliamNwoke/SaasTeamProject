"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var CommentModel = /** @class */ (function () {
    function CommentModel() {
        this.createSchema();
        this.createModel();
    }
    CommentModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            id: String,
            postId: Number,
            author: String,
            description: String,
            commentDate: Date,
            likes: Number,
            dislikes: Number
        }, { collection: 'comments' });
    };
    CommentModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Comments", this.schema);
    };
    CommentModel.prototype.addComment = function (response) { };
    CommentModel.prototype.viewAllComments = function (response) { };
    return CommentModel;
}());
exports.CommentModel = CommentModel;
