import * as express from 'express';
import * as bodyParser from 'body-parser';
import {PostModel} from './model/PostModel';
import {AccountModel} from './model/AccountModel';
import {CommentModel} from './model/CommentModel';
import {ListModel} from './model/ListModel';
import {TaskModel} from './model/TaskModel';
import * as crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  //UniVerse Models
  public Posts:PostModel;
  public Accounts:AccountModel;
  public Comments:CommentModel;
  //toDoSample Models
  public Lists:ListModel;
  public Tasks:TaskModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();

    //UniVerse Models
    this.Posts = new PostModel();
    this.Accounts = new AccountModel();
    this.Comments = new CommentModel();
    //toDoSample Models
    this.Lists = new ListModel();
    this.Tasks = new TaskModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

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

    // POST
    router.post('/posts/', (req, res) => {

      // GUIDs (Globally Unique Identifiers)
      const id = uuidv4();
      console.log(req.body);
        var postJsonObj  = req.body;
        postJsonObj.id = id;
        this.Posts.model.create([postJsonObj], (err) => {
          if (err) {
              console.log('object creation failed');
          }
      });
        res.send('{"id":"' + id + '"}');
    });
    router.get('/posts/', (req, res) => {
      console.log('Query All Posts');
      this.Posts.retrieveAllPosts(res);
    });
    router.get('/posts/:postId', (req, res) => {
      var id = req.params.postId;
      console.log('Query single post with id: ' + id);
      this.Posts.retrievePostsDetails(res, {postId: id});
  });

    // COMMENTS
    router.post('/comments/', (req, res) => {
      const id = uuidv4();
      console.log(req.body);
        var commentJsonObj  = req.body;
        commentJsonObj.id = id;
        this.Comments.model.create([commentJsonObj], (err) => {
          if (err) {
              console.log('object creation failed');
          }
      });
        res.send('{"id":"' + id + '"}');
    });
    // Comment
    router.get('/comments/', (req, res) => {
      console.log('Query All Comments');
      this.Comments.retrieveAllComments(res);
    });
    
    
    // toDoSample Routes
    router.post('/app/list/', (req, res) => {
      const id = crypto.randomBytes(16).toString("hex");
      console.log(req.body);
        var jsonObj = req.body;
        jsonObj.listId = id;
        this.Lists.model.create([jsonObj], (err) => {
            if (err) {
                console.log('object creation failed');
            }
        });
        res.send('{"id":"' + id + '"}');
    });

    router.get('/app/list/:listId/count', (req, res) => {
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        this.Tasks.retrieveTasksCount(res, {listId: id});
    });

    router.post('/app/list2/', (req, res) => {
      const id = crypto.randomBytes(16).toString("hex");
      console.log(req.body);
        var jsonObj = req.body;
        jsonObj.listId = id;
        let doc = new this.Lists.model(jsonObj);
        doc.save((err) => {
           console.log('object creation failed');
        });
        res.send('{"id":"' + id + '"}');
    });

    router.get('/app/list/:listId', (req, res) => {
        var id = req.params.listId;
        console.log('Query single list with id: ' + id);
        this.Tasks.retrieveTasksDetails(res, {listId: id});
    });

    router.get('/app/list/', (req, res) => {
        console.log('Query All list');
        this.Lists.retrieveAllLists(res);
    });

    router.get('/app/listcount', (req, res) => {
      console.log('Query the number of list elements in db');
      this.Lists.retrieveListCount(res);
    });

    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};