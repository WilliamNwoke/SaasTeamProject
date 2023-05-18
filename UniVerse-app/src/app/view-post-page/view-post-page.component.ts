import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostApiService } from '../post-api.service';
import { CommentApiService } from '../comment-api.service';
import { ActivatedRoute } from '@angular/router';
import { PostClass } from '../post-class';
import { CommentClass } from '../comment-class';
import { CommentListComponent } from '../comment-list/comment-list.component';

@Component({
  selector: 'app-view-post-page',
  templateUrl: './view-post-page.component.html',
  styleUrls: ['./view-post-page.component.css'],
  providers: [CommentListComponent]

})

export class ViewPostPageComponent{
  postId: string | null = null;
  post: PostClass | null = null;
  commentData: CommentClass = new CommentClass('','','','',new Date(),0,0);
  // @Output() commentAdded: EventEmitter<void> = new EventEmitter<void>();


  constructor(private postApiService: PostApiService, private commentApiService: CommentApiService,  private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
      this.getSpecificPost(this.postId);
    });
  }
  
  getSpecificPost(id:any){
    this.postApiService.getSpecificPost(id).subscribe((result: PostClass)=>{
      this.post = result;
    })
  }

  submitComment() {
    console.log(this.commentData)
    // Update the postId to belong to the post
    if (this.postId !== null) {
      this.commentData.postId = this.postId;
  
    // Hard code user info for now
    this.commentData.author = "Myke Brako";
    this.commentData.dateTime = new Date();

    this.commentApiService.addComment(this.commentData).subscribe({
      next: (response) => {
        console.log(response);
        // Reset the comment form
        this.commentData = new CommentClass('', '', '', '', new Date(), 0, 0); 

        // refresh comment list?
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  console.log("PostId is null")
    
  }
}

