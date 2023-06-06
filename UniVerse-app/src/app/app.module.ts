import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';
import { ViewPostPageComponent } from './view-post-page/view-post-page.component';
import { PostIndexPageComponent } from './post-index-page/post-index-page.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { MyForumpostsComponent } from './my-forumposts/my-forumposts.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContentPolicyComponent } from './content-policy/content-policy.component';
import { UserAgreementComponent } from './user-agreement/user-agreement.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostPageComponent,
    ViewPostPageComponent,
    PostIndexPageComponent,
    CommentListComponent,
    StudentProfileComponent,
    MyForumpostsComponent,
    PrivacyComponent,
    ContentPolicyComponent,
    UserAgreementComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
