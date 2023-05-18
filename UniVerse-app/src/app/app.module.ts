import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ViewPostPageComponent } from './view-post-page/view-post-page.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { PostIndexPageComponent } from './post-index-page/post-index-page.component';
import { NotificationIndexPageComponent } from './notification-index-page/notification-index-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreatePostPageComponent,
    PostCardComponent,
    ViewPostPageComponent,
    CommentCardComponent,
    PostIndexPageComponent,
    NotificationIndexPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
