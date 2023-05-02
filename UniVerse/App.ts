import * as express from 'express';
import * as bodyParser from 'body-parser';
import {PostModel} from './model/PostModel';
import {AccountModel} from './model/AccountModel';
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

    // Account: Post Single Element
    router.post('/accounts/', (req, res) => {
      const id = uuidv4();
      console.log(req.body);
        var accountJsonObj  = req.body;
        accountJsonObj.id = id;
        console.log("calling createAccount()")
        this.Accounts.model.createAccount([accountJsonObj], (err) => {
          if (err) {
              console.log('object creation failed');
          }
      });
        res.send('{"id":"' + id + '"}');
    });

    // Post: Post Single Element
    router.post('/posts/', (req, res) => {

      // GUIDs (Globally Unique Identifiers)
      const id = uuidv4();
      console.log(req.body);
        var newPostData  = req.body;
        newPostData.id = id;
        this.Posts.model.createPost([newPostData], (err) => {
          if (err) {
              console.log('object creation failed');
          }
      });

        // Return id back to client
        res.send('{"id":"' + id + '"}');
    });

    // Get Single Element
    // TODO

    // Get Multi Element
    // TODO
    
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