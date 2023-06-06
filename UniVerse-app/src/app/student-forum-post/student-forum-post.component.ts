import { Component,  OnInit } from '@angular/core';
import { ForumPostApiService } from '../forumpost-api.service';
import { ForumPostClass } from '../forumpost-class';
import { AccountApiService } from '../account-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-forum-post',
  templateUrl: './student-forum-post.component.html',
  styleUrls: ['./student-forum-post.component.css']
})
export class StudentForumPostComponent  implements OnInit {
  forumPosts: Array<ForumPostClass>= [];
  http: any;

  id: any;

constructor(private forumPostApiService: ForumPostApiService, private router: Router, private accountApiService: AccountApiService) {}

  ngOnInit(): void {
    this.accountApiService.getAccountId().subscribe((result: any) => {
      this.id = result.accountId;
      console.log("Account ID: " + this.id);

      this.forumPostApiService.getAllMyForumPost(this.id).subscribe((result: Array<ForumPostClass>) => {
        this.forumPosts = result;
        console.log("Forum Posts: " + JSON.stringify(this.forumPosts));
      });
    }, (error: any) => {
      console.error("Error: " + error);
    });
  }
}
