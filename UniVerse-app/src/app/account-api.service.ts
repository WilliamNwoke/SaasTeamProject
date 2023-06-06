import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Account } from './account-class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  // hostUrl:string = 'https://universe0.azurewebsites.net/';
  hostUrl:string = 'http://localhost:8080/';

  private account: Account = new Account('', '', '', '', '', '','','');
  private isLoggedIn = false;

  constructor(private http: HttpClient) {}

  login() {
    // Here, you would perform the logic to log in the user.
    // For example, you could call an authentication API and set the user object.
    // For this example, we'll just set a hardcoded user object.
    this.isLoggedIn = true;
  }

  logout() {
    // Here, you would perform the logic to log out the user.
    // For this example, we'll just create a new instance of the Account class with empty values.
    this.account = new Account('', '', '', '', '', '','','');
    this.isLoggedIn = false;
  }

  getAccount(): string {
    return "9fa4f6c0-27dd-4b30-90fc-ca34443bbbd4";
  }

  setAccount(account: Account) {
    this.account = account;
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getAccountInfo(id: string){
    return this.http.get<Account>(this.hostUrl + "/account/" + id);
  }

  getAccountId() {
    return this.http.get<Account>(this.hostUrl + "studentaccountid");
  
  }

}
