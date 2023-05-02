import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IAccountModel} from '../interfaces/IAccountModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class AccountModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createAccountModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                id: String,
                username: String,
                fname: String,
                lname: String,
                email: String,
                department: String
            }, {collection: 'accounts'}
        );
    }

    public createAccountModel(): void {
        this.model = mongooseConnection.model<IAccountModel>("accounts", this.schema);
    }

    public retrieveAllAccount(response:any): any {
        console.log("retrieve all Accounts ...");
        
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveAccountCount(response:any): any {
        console.log("retrieve Account Count ...");
        var query = this.model.estimatedDocumentCount();
        query.exec( (err, numOfAccount) => {
            console.log("numberOfAccount: " + numOfAccount);
            response.json(numOfAccount) ;
        });
    }

}
export {AccountModel};