"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumPostModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var ForumPostModel = /** @class */ (function () {
    function ForumPostModel() {
        this.createSchemas();
        this.createModel();
    }
    ForumPostModel.prototype.createSchemas = function () {
        this.schema = new Mongoose.Schema({
            id: { type: String, required: true },
            accountId: { type: String, required: true },
            title: { type: String, required: true },
            author: { type: String, required: true },
            isAnonymous: { type: Boolean, required: true },
            isEdited: { type: Boolean, required: true },
            description: { type: String, required: true },
            dateTime: { type: Date, required: true },
            likes: { type: Number, required: true },
            dislikes: { type: Number, required: true },
            comments: { type: [String], required: true }
        }, { collection: 'forumposts' });
    };
    ForumPostModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("ForumPosts", this.schema);
    };
    ForumPostModel.prototype.createForumPost = function (forumpostData) {
        return __awaiter(this, void 0, void 0, function () {
            var forumpost;
            return __generator(this, function (_a) {
                forumpost = new this.model(forumpostData);
                return [2 /*return*/, forumpost.save(function (err, forumpost) {
                        if (err) {
                            console.log("Error saving forumpost");
                        }
                        else {
                            console.log("ForumPost saved successfully");
                        }
                    })];
            });
        });
    };
    ForumPostModel.prototype.updateForumPost = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, forumpost) {
            if (err) {
                console.log("Error finding forumpost");
            }
            else {
                forumpost.title = response.title;
                forumpost.author = response.author;
                forumpost.isAnonymous = response.isAnonymous;
                forumpost.likes = response.likes;
                forumpost.dislikes = response.dislikes;
                forumpost.comments = response.comments;
                forumpost.save(function (err, forumpost) {
                    if (err) {
                        console.log("Error saving forumpost");
                    }
                    else {
                        console.log("ForumPost saved successfully");
                        response.json(forumpost);
                    }
                });
            }
        });
    };
    ForumPostModel.prototype.deleteForumPost = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, forumpost) {
            if (err) {
                console.log("Error finding forumpost");
            }
            else {
                forumpost.remove(function (err, post) {
                    if (err) {
                        console.log("Error deleting forumpost");
                    }
                    else {
                        console.log("ForumPost deleted successfully");
                    }
                });
            }
        });
    };
    ForumPostModel.prototype.viewForumPost = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, forumpost) {
            if (err) {
                console.log("Error finding forumpost");
            }
            else {
                console.log("ForumPost found");
                response.json(forumpost);
            }
        });
    };
    ForumPostModel.prototype.retrieveAllMyForumPosts = function (response, filter) {
        console.log("id:" + filter);
        var query = this.model.find(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    ForumPostModel.prototype.retrieveAllForumPosts = function (response) {
        var query = this.model.find({});
        query.exec(function (err, forumpostArray) {
            if (err) {
                console.log(err);
            }
            response.json(forumpostArray);
        });
    };
    ForumPostModel.prototype.updateForumPostComment = function (response, forumpostId, commentId) {
        // Define the query to find the forumpost object with the specified 'forumpostId'
        var filter = { id: forumpostId };
        // Define the update operation using the $push operator to append the 'commentId' to the 'comments' array
        var update = { $push: { comments: commentId } };
        // Use the findOneAndUpdate() method to perform the update operation on the forumpost object matching the query
        this.model.findOneAndUpdate(filter, update, { new: true }, function (err, forumpost) {
            if (err) {
                // Handle the error
                console.error(err + "\n" + 'An error occurred while updating the forumpost');
            }
            else if (!forumpost) {
                // Handle the case where no post was found with the specified 'postId'
                console.error(err + "\n" + "No post was found with forumpostId ".concat(forumpostId));
            }
            else {
                // Return the updated forumpost object
                console.log(forumpost);
            }
        });
    };
    ForumPostModel.prototype.retrieveForumPostsDetails = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, forumpostArray) {
            response.json(forumpostArray);
        });
    };
    return ForumPostModel;
}());
exports.ForumPostModel = ForumPostModel;
