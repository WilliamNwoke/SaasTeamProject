import { Component, ViewChild } from '@angular/core';
import { PostCardComponent } from './post-card/post-card.component';
import { PostIndexPageComponent } from './post-index-page/post-index-page.component';
import { Account } from "./account-class";
import { AccountApiService } from './account-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostCardComponent, PostIndexPageComponent]
})

export class AppComponent {
  title = 'UniVerse-app';
  account: Account = new Account('', '', '', '', '', ''); // We can assign a value of Account or Null

  constructor(private accountApiService: AccountApiService) {}

  login(): void {
    // Call login 
    this.accountApiService.login();
    // Update account
    this.account = this.accountApiService.getAccount();
    console.log("Now logged in as: ", this.account.fname)
  }

  logout(): void {
    // call logout
    this.accountApiService.logout();
    // Update to empty account
    this.account = this.accountApiService.getAccount();
    console.log("Logged out");
  }

  isLoggedIn(): boolean {
    return this.accountApiService.getIsLoggedIn();
  }
}
