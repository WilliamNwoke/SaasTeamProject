import { Component, OnInit} from '@angular/core';
import { PostIndexPageComponent } from './post-index-page/post-index-page.component';
import { Account } from "./account-class";
import { AccountApiService } from './account-api.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostIndexPageComponent]
})

export class AppComponent {
  title = 'UniVerse-app';
  account: Account = new Account('','','','','','','','');
  
  constructor(private accountApiService: AccountApiService) {
  }


}
