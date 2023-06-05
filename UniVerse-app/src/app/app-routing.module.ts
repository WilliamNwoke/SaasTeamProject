import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component';
import { ViewPostPageComponent } from './view-post-page/view-post-page.component';
import { PostIndexPageComponent } from './post-index-page/post-index-page.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { MyForumpostsComponent } from './my-forumposts/my-forumposts.component';

const routes: Routes = [
  {path: 'studentprofile', component: StudentProfileComponent},
  {path: 'createpost', component: CreatePostPageComponent},
  {path: 'viewpost/:id', component: ViewPostPageComponent},
  {path: 'myforumposts/9fa4f6c0-27dd-4b30-90fc-ca34443bbbd4', component: MyForumpostsComponent},
  {path: 'postindex', component: PostIndexPageComponent},
  {path: '', component: PostIndexPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
