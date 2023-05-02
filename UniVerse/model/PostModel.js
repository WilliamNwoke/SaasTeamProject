"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var PostModel = /** @class */ (function () {
    function PostModel() {
        this.createSchemas();
        this.createModel();
    }
    PostModel.prototype.createSchemas = function () {
        this.schema = new Mongoose.Schema({
            id: String,
            accountId: String,
            title: String,
            author: String,
            isAnonymous: Boolean,
            likes: Number,
            dislikes: Number,
            comments: [String]
        }, { collection: 'posts' });
    };
    PostModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Posts", this.schema);
    };
    PostModel.prototype.updatePost = function (response) { };
    PostModel.prototype.deletePost = function (response) { };
    PostModel.prototype.viewPost = function (response) { };
    PostModel.prototype.retrieveAllPosts = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    PostModel.prototype.retrievePostsDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return PostModel;
}());
exports.PostModel = PostModel;
