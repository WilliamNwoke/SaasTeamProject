import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';
import { ViewPostPageComponent } from './view-post-page/view-post-page.component';
import { PostIndexPageComponent } from './post-index-page/post-index-page.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostPageComponent,
    ViewPostPageComponent,
    PostIndexPageComponent,
    CommentListComponent
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
