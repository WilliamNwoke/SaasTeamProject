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
  
  constructor(private accountApiService: AccountApiService) {
  }

  ngOnInit(): void {
    
  }
}
