import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';
import { ViewPostPageComponent } from './view-post-page/view-post-page.component';
import { PostIndexPageComponent } from './post-index-page/post-index-page.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { MyForumpostsComponent } from './my-forumposts/my-forumposts.component';
import { StudentForumPostComponent } from './student-forum-post/student-forum-post.component';

const routes: Routes = [
  {path: 'studentprofile', component: StudentProfileComponent},
  {path: 'createpost', component: CreatePostPageComponent},
  {path: 'viewpost/:id', component: ViewPostPageComponent},
  // {path: 'myforumposts/:id', component: MyForumpostsComponent},
  {path: 'myforumposts', component: MyForumpostsComponent},
  // {path: 'myforumposts', component: StudentForumPostComponent},
  {path: 'postindex', component: PostIndexPageComponent},
  {path: '', component: PostIndexPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
