import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account-class';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {
  
  private account: Account = new Account('', '', '', '', '', '');
  private isLoggedIn = false;

  constructor(private http: HttpClient) {}

  login() {
    // Here, you would perform the logic to log in the user.
    // For example, you could call an authentication API and set the user object.
    // For this example, we'll just set a hardcoded user object.
    this.account = new Account(
      'jkdhhkjfd-adf3sadf3-dsfdds',
      'Uchenna1233445',
      'Uche',
      'A',
      'mabuthuraya122@seattleu.edu',
      'College of Science and Engineering'
    );
    this.isLoggedIn = true;
  }

  logout() {
    // Here, you would perform the logic to log out the user.
    // For this example, we'll just create a new instance of the Account class with empty values.
    this.account = new Account('', '', '', '', '', '');
    this.isLoggedIn = false;
  }

  getAccount(): Account {
    // Later on we will have it where when we hit login, we call OAuth without coming back here. 
    return this.account;
  }

  setAccount(account: Account) {
    this.account = account;
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

}
