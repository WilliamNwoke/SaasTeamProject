import Mongoose = require("mongoose");

interface IAccountModel extends Mongoose.Document {
    id: String,
    username: String,
    fname: String,
    lname: String,
    email: String,
    oAuthId: String,
    department: String
}
export {IAccountModel};