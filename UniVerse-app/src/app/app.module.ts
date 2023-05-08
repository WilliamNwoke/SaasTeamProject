import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ViewPostPageComponent } from './view-post-page/view-post-page.component';
import { CommentCardComponent } from './comment-card/comment-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreatePostPageComponent,
    PostCardComponent,
    ViewPostPageComponent,
    CommentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
