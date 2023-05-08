import { Component, ViewChild } from '@angular/core';
import { PostCardComponent } from './post-card/post-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostCardComponent]
})
export class AppComponent {
  title = 'UniVerse-app';

  constructor(private postCardComponent: PostCardComponent) {}
}