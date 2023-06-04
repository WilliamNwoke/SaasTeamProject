import * as express from 'express';
import * as bodyParser from 'body-parser';
import {ForumPostModel} from './model/ForumPostModel';
import {AccountModel} from './model/AccountModel';
import {CommentModel} from './model/CommentModel';
import { v4 as uuidv4 } from 'uuid';
import GooglePassportObj from './GooglePassport';
import * as passport from 'passport';
import * as logger from 'morgan';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  //UniVerse Models
  public ForumPosts:ForumPostModel;
  public Accounts:AccountModel;
  public Comments:CommentModel;
  public cors = require('cors');
  public idGenerator:number;
  public googlePassportObj:GooglePassportObj;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.googlePassportObj = new GooglePassportObj();
    this.idGenerator = 102;
    //UniVerse Models
    this.ForumPosts = new ForumPostModel();
    this.Accounts = new AccountModel();
    this.Comments = new CommentModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    this.expressApp.use(session({ secret: 'keyboard cat' }));
    this.expressApp.use(cookieParser());
    this.expressApp.use(passport.initialize());
    this.expressApp.use(passport.session());
    this.expressApp.use(logger('dev'));

  // Enable CORS
  this.expressApp.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
  });

  }

  private validateAuth(req, res, next):void {
    if (req.isAuthenticated()) {
       console.log("user is authenticated");
      //  session.userOpenId = sha512.sha512(req.user.id);
      //  session.userName = req.user.displayName;
      //  session.email = req.user.emails[0].value;
      // console.log("sha 512 code is "+sha512.sha512(req.user.id));
        return next(); 
      }
    console.log("user is not authenticated");
    res.json({"authentication" : "failed"});
  }

  private routes(): void {
    let router = express.Router();
 
    
    router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));


    // router.get('/auth/google/callback', 
    // passport.authenticate('google', 
    //   { failureRedirect: '/failure' , successRedirect: '/#/postindex'}
    // ),
    // (req, res) => {
    //   console.log("successfully authenticated user and returned to callback page.");
    //   console.log("redirecting to /postindex");
    //   res.redirect('/postindex');
    // } 
    router.get('/auth/google/callback', 
    passport.authenticate('google', 
      { failureRedirect: '/#/'}
    ),
    (req, res) => {
      console.log("successfully authenticated user and returned to callback page.");
      // console.log("redirecting to /postindex");
      res.redirect('/#/');
    } 
    );

  // Configure API endpoints.
  // private routes(): void {
  //   let router = express.Router();

    // ACCOUNT
    router.post('/accounts/', (req, res) => {
      const id = uuidv4();
      console.log(req.body);
        var accountJsonObj  = req.body;
        accountJsonObj.id = id;
        this.Accounts.model.create([accountJsonObj], (err) => {
          if (err) {
              console.log('object creation failed');
          }
      });
        res.send('{"id":"' + id + '"}');
    });

    router.get('/account/:id', (req, res) => {
      var accountId = req.params.id;
      console.log('Query single account with id: ' + accountId);
      this.Accounts.viewAccount(res, {id: accountId}); //  
    });


    // POST
    router.post('/forumposts/', (req, res) => {

      // GUIDs (Globally Unique Identifiers)
      const id = uuidv4();
      console.log(req.body);
        var postJsonObj  = req.body;
        postJsonObj.id = id;
        this.ForumPosts.model.create([postJsonObj], (err) => {
          if (err) {
              console.log('forumPosts creation failed');
          }
      });
        res.send('{"id":"' + id + '"}');
    });
    
    router.get('/forumpost/:id', (req, res) => {
      var forumpostId = req.params.id;
      console.log('Query single forumpost with id: ' + forumpostId);
      this.ForumPosts.retrieveForumPostsDetails(res, {id: forumpostId});
    });

    router.get('/forumposts/', (req, res) => {
      console.log('Query All ForumPosts');
      this.ForumPosts.retrieveAllForumPosts(res);
    });

    router.get('/forumposts/:accountId', (req, res) => {
      const id = req.params.accountId;
      console.log('Query All My forumposts using my accountId');
      this.ForumPosts.retrieveAllMyForumPosts(res, {accountId: id});
    });

    // COMMENTS
    router.post('/comments/', (req, res) => {
      const id = uuidv4();
      console.log(req.body);
        var commentJsonObj = req.body;
        commentJsonObj.id = id;
        this.Comments.model.create([commentJsonObj], (err) => {
          if (err) {
              console.log('object creation failed');
          }
      });
      // RETRIEVE forumpost
      this.ForumPosts.updateForumPostComment(res, commentJsonObj.forumpostId, id);
      res.json(commentJsonObj);
    });

    router.get('/comments/:forumpostId', (req, res) => {
      const id = req.params.forumpostId;
      console.log('Query All Comments for this forumPost id');
      this.Comments.retrieveAllComments(res, {forumpostId: id});
    }); 

    this.expressApp.use('/', router);
    
    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/angularDist'));
    this.expressApp.use('/*', function(req, res){
      res.sendFile(__dirname+'/angularDist/index.html')
    })

  }

}

export {App};