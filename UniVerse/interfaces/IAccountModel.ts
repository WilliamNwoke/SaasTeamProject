import Mongoose = require("mongoose");

interface IAccountModel extends Mongoose.Document {
    Id: number;
    username: string;
    fname: string;
    lname: string;
    email: string;
    department: string;
}
export {IAccountModel};