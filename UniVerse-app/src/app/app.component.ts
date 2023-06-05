import { Component, ViewChild } from '@angular/core';
import { PostIndexPageComponent } from './post-index-page/post-index-page.component';
import { Account } from "./account-class";
import { AccountApiService } from './account-api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostIndexPageComponent]
})

export class AppComponent {
  title = 'UniVerse-app';

  account: any;
  
  constructor(private accountApiService: AccountApiService) {
  }

  ngOnInit(): void {

    this.account = this.accountApiService.getAccount();
    console.log("I'm in app.component");
    console.log("id: "+ this.account.id);
    console.log("id: "+ this.account.username);
    console.log("id: "+ this.account.image);
    
  }
}
