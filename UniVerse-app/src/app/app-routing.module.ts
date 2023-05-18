import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component'; 
import { ViewPostPageComponent } from './view-post-page/view-post-page.component';
import { PostIndexPageComponent } from './post-index-page/post-index-page.component';

const routes: Routes = [
  {path: 'createpost', component: CreatePostPageComponent},
  {path: 'viewpost/:id', component: ViewPostPageComponent},  
  {path: 'postindex', component: PostIndexPageComponent},  
  {path: '', component: PostIndexPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }