import { Component, ViewChild } from '@angular/core';
import { PostIndexPageComponent } from './post-index-page/post-index-page.component';
import { Account } from "./account-class";
import { AccountApiService } from './account-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostIndexPageComponent]
})

export class AppComponent {
  title = 'UniVerse-app';
  
  constructor(private accountApiService: AccountApiService) {
  }

  ngOnInit(): void {
    
  }
}
