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
            accountId: Number,
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
    PostModel.prototype.createPost = function (response, newPostData) {
        var newPost = new this.model(newPostData);
        newPost.save(function (err, post) {
            if (err) {
                response.status(500).send(err);
            }
            else {
                response.json(post);
            }
        });
    };
    PostModel.prototype.updatePost = function (response) { };
    PostModel.prototype.deletePost = function (response) { };
    PostModel.prototype.viewPost = function (response) { };
    PostModel.prototype.viewAllPosts = function (response) { };
    return PostModel;
}());
exports.PostModel = PostModel;
