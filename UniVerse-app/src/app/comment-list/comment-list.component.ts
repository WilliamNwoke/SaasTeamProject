import { Component, Input, OnInit } from '@angular/core';
import { CommentApiService } from '../comment-api.service';
import { CommentClass } from '../comment-class';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() postId: string = '';
  comments: CommentClass[] = [];

  constructor(private commentApiService: CommentApiService) {}

  ngOnInit(): void {
    // Populate comments array if postId exists
    if (this.postId !== '') {
      this.fetchPostComments();
    }
  }

  fetchPostComments(): void {
    this.commentApiService.getPostComments(this.postId).subscribe((result: CommentClass[]) => {
      this.comments = result;
    });
  }

  handleNewCommentAdded(newComment: CommentClass): void {
    // Add the new comment to the comments array
    this.comments.push(newComment);
  }
}
