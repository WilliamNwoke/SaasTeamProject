import { Component, ViewChild } from '@angular/core';
import { PostCardComponent } from './post-card/post-card.component';
import { PostIndexPageComponent } from './post-index-page/post-index-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostCardComponent, PostIndexPageComponent]
})
export class AppComponent {
  title = 'UniVerse-app';
}