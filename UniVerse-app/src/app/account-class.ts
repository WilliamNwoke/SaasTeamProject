export class Account {
    id: string;
    username: string;
    fname: string;
    lname: string;
    email: string;
    oAuthId: string;
    department: string;
  
    constructor(id: string, username: string, fname: string, lname: string, email: string, oAuthId: string, department: string) {
      this.id = id;
      this.username = username;
      this.fname = fname;
      this.lname = lname;
      this.email = email;
      this.oAuthId = oAuthId;
      this.department = department;
    }
  }
  