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
                id: String,
                username: String,
                fname: String,
                lname: String,
                email: String,
                department: String
            }, {collection: 'accounts'} // TODO: review what this line is for
        );
    }

    //  accountDocument = IaccountModel 
    // Account = Mongoose.model<IaccountModel> = this.model

    public createModel(): void {
        this.model = mongooseConnection.model<IAccountModel>("Accounts", this.schema);
    }

    public createAccount(accountData: any): any {
        const newAccount = new this.model(accountData);
        newAccount.save((err, savedAccount) => {
            console.log("account saved");
            accountData.json(savedAccount);
        });

    }

    public viewAccount(accountId: any): any {
        var query = this.model.findOne({_id: accountId});
        query.exec((err, userAccount) => {
            console.log("Username is " + userAccount);
            accountId.json(userAccount);
        });
    }
}
export {AccountModel};