"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var ForumPostModel_1 = require("./model/ForumPostModel");
var AccountModel_1 = require("./model/AccountModel");
var CommentModel_1 = require("./model/CommentModel");
var uuid_1 = require("uuid");
var GooglePassport_1 = require("./GooglePassport");
var passport = require("passport");
var logger = require("morgan");
var session = require("express-session");
var cookieParser = require("cookie-parser");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.cors = require('cors');
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.googlePassportObj = new GooglePassport_1.default();
        this.idGenerator = 102;
        //UniVerse Models
        this.ForumPosts = new ForumPostModel_1.ForumPostModel();
        this.Accounts = new AccountModel_1.AccountModel();
        this.Comments = new CommentModel_1.CommentModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(session({ secret: 'keyboard cat' }));
        this.expressApp.use(cookieParser());
        this.expressApp.use(logger('dev'));
        // Enable CORS
        this.expressApp.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            next();
        });
    };
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
        router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/failure', successRedirect: '/#/postindex' }), function (req, res) {
            console.log("successfully authenticated user and returned to callback page.");
            console.log("redirecting to /postindex");
            res.redirect('/postindex');
        });
        // Configure API endpoints.
        // private routes(): void {
        //   let router = express.Router();
        // ACCOUNT
        router.post('/accounts/', function (req, res) {
            var id = (0, uuid_1.v4)();
            console.log(req.body);
            var accountJsonObj = req.body;
            accountJsonObj.id = id;
            _this.Accounts.model.create([accountJsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            res.send('{"id":"' + id + '"}');
        });
        router.get('/account/:id', function (req, res) {
            var accountId = req.params.id;
            console.log('Query single account with id: ' + accountId);
            _this.Accounts.viewAccount(res, { id: accountId }); //  
        });
        // POST
        router.post('/forumposts/', function (req, res) {
            // GUIDs (Globally Unique Identifiers)
            var id = (0, uuid_1.v4)();
            console.log(req.body);
            var postJsonObj = req.body;
            postJsonObj.id = id;
            _this.ForumPosts.model.create([postJsonObj], function (err) {
                if (err) {
                    console.log('forumPosts creation failed');
                }
            });
            res.send('{"id":"' + id + '"}');
        });
        router.get('/forumpost/:id', function (req, res) {
            var forumpostId = req.params.id;
            console.log('Query single forumpost with id: ' + forumpostId);
            _this.ForumPosts.retrieveForumPostsDetails(res, { id: forumpostId });
        });
        router.get('/forumposts/', function (req, res) {
            console.log('Query All ForumPosts');
            _this.ForumPosts.retrieveAllForumPosts(res);
        });
        router.get('/forumposts/:accountId', function (req, res) {
            var id = req.params.accountId;
            console.log('Query All My forumposts using my accountId');
            _this.ForumPosts.retrieveAllMyForumPosts(res, { accountId: id });
        });
        // COMMENTS
        router.post('/comments/', function (req, res) {
            var id = (0, uuid_1.v4)();
            console.log(req.body);
            var commentJsonObj = req.body;
            commentJsonObj.id = id;
            _this.Comments.model.create([commentJsonObj], function (err) {
                if (err) {
                    console.log('object creation failed');
                }
            });
            // RETRIEVE forumpost
            _this.ForumPosts.updateForumPostComment(res, commentJsonObj.forumpostId, id);
            res.json(commentJsonObj);
        });
        router.get('/comments/:forumpostId', function (req, res) {
            var id = req.params.forumpostId;
            console.log('Query All Comments for this forumPost id');
            _this.Comments.retrieveAllComments(res, { forumpostId: id });
        });
        this.expressApp.use('/', router);
        //
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/angularDist'));
    };
    return App;
}());
exports.App = App;
