import { Component, Input } from '@angular/core';
import { CommentApiService } from '../comment-api.service';
import { CommentClass } from '../comment-class';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  @Input() postId: string | undefined;
  comments: Array<CommentClass>= [];

  constructor(private commentApiService: CommentApiService) {
  }

  ngOnInit() {
    // Populate comments: Array IF postId exists
    if (this.postId != null){
      this.commentApiService.getPostComments(this.postId).subscribe((result: Array<CommentClass>) => {
        this.comments = result;
      });
    }
  }
}

