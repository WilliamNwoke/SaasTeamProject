import Mongoose = require("mongoose");
import { DataAccess } from "../DataAccess";
import { INotificationModel } from "../interfaces/INotificationModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class NotifcationModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                id: Number,
                postId: Number,
                author: String,
                description: String,
                commentDate: Date,
                likes: Number,
                dislikes: Number
            }, {collection: 'notifications'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<INotificationModel>("Notifcations", this.schema);
    }

    public createNotification(): void{}
    public removeNotification(): void{}
    public viewNotification(): void{}
    public viewAllNotifications(): void{}
    public notificationTimer(): void{}
}