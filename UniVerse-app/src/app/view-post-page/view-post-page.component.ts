import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ForumPostApiService } from '../forumpost-api.service';
import { CommentApiService } from '../comment-api.service';
import { ActivatedRoute } from '@angular/router';
import { ForumPostClass } from '../forumpost-class';
import { CommentClass } from '../comment-class';
import { CommentListComponent } from '../comment-list/comment-list.component';

@Component({
  selector: 'app-view-post-page',
  templateUrl: './view-post-page.component.html',
  styleUrls: ['./view-post-page.component.css'],
  providers: [CommentListComponent]

})

export class ViewPostPageComponent{
  forumpostId: string = '';
  forumpost: ForumPostClass = new ForumPostClass('', '', '', '', false, false, '', new Date(), 0, 0, []);
  commentData: CommentClass = new CommentClass('','','','',new Date(),0,0);

  @ViewChild(CommentListComponent) commentListComponent!: CommentListComponent;
  
  constructor(private forumPostApiService: ForumPostApiService, private commentApiService: CommentApiService,  private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.forumpostId = params.get('id') as string; 
      this.getSpecificPost(this.forumpostId);
    });
  }
  
  getSpecificPost(id:any){
    this.forumPostApiService.getSpecificPost(id).subscribe((result: ForumPostClass)=>{
      this.forumpost = result;
    })
  }

  submitComment() {
    console.log(this.commentData)
    // Update the postId to belong to the post
    if (this.forumpostId !== '') {
      this.commentData.forumpostId = this.forumpostId;
  
    // Replace with OAuth User Later
    this.commentData.author = "Myke Brako";
    this.commentData.dateTime = new Date();

    this.commentApiService.addComment(this.commentData).subscribe({
      next: (response) => {
        console.log(response);
        // Reset the comment form
        this.commentData = new CommentClass('', '', '', '', new Date(), 0, 0);
        // Emit the event with the new comment
        this.commentListComponent.handleNewCommentAdded(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
    
  }
}

