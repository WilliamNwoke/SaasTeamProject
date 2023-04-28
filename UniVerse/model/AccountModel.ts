import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {IAccountModel} from "../interfaces/IAccountModel";
let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;


class AccountModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                Id: Number,
                username: String,
                fname: String,
                lname: String,
                email: String,
                department: String
            }, {collection: 'accounts'} // TODO: review what this line is for
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IAccountModel>("Accounts", this.schema);
    }

    public createAccount(): any {

    }

    public viewAccount(): any {

    }
}
export {AccountModel};