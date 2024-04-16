"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const DataAccess_1 = require("../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
class NotifcationModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
        this.schema = new Mongoose.Schema({
            id: { type: String, required: true },
            forumpostId: { type: String, required: true },
            author: { type: String, required: true },
            description: { type: String, required: true },
            commentDate: { type: Date, required: true },
            likes: { type: Number, required: true },
            dislikes: { type: Number, required: true },
        }, { collection: 'notifications' });
    }
    createModel() {
        this.model = mongooseConnection.model("Notifcations", this.schema);
    }
    // async createNotification(response: any, commentData: Object): Promise<any>{
    //     var commentMod = new this.model(commentData);
    //     return commentMod.save((err, comment) => {
    //         if(err){
    //             console.log("Error saving comment");
    //         } else {
    //             console.log("Commented successfully added");
    //             response.json(comment);
    //         }
    //     });
    // }
    // public createNotification(): void{}
    removeNotification(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, notification) => {
            if (err) {
                console.log("Error finding notification");
            }
            else {
                notification.remove((err, notification) => {
                    console.log("removed");
                });
            }
        });
    }
    viewNotification(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, notification) => {
            if (err) {
                console.log("Error finding notification");
            }
            else {
                console.log("viewed ");
                response.json(notification);
            }
        });
    }
    viewAllNotifications(response, filter) {
        var query = this.model.find(filter);
        query.exec((err, notification) => {
            if (err) {
                console.log("Error finding notification");
            }
            else {
                console.log("viewed ");
                response.json(notification);
            }
        });
    }
    // TODO: complete this method to have notification time
    notificationTimer() { }
}
