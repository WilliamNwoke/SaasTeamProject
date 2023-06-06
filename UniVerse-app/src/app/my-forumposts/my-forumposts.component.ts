import { Component, OnInit } from '@angular/core';
import { ForumPostApiService } from '../forumpost-api.service';
import { ForumPostClass } from '../forumpost-class';
import { AccountApiService } from '../account-api.service';

import { Router } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Account } from '../account-class';

@Component({
  selector: 'app-my-forumposts',
  templateUrl: './my-forumposts.component.html',
  styleUrls: ['./my-forumposts.component.css']
})

export class MyForumpostsComponent implements OnInit {

  forumPosts: Array<ForumPostClass>= [];
  studentAccount: Account = new Account('','','','','','','');

  constructor(private forumPostApiService: ForumPostApiService, private router: Router, private accountApiService: AccountApiService) {
  }

  // TODO: how do i get the account Id to send to get allmyforumPost
  ngOnInit(): void {
    // allow only if auth exists
    // if (something){
      this.accountApiService.getAccountId().subscribe((result: Account) => {
        this.studentAccount = result;
        console.log("Angular AccountId: " + this.studentAccount.id);
        this.forumPostApiService.getAllMyForumPost(this.studentAccount.id).subscribe((result: Array<ForumPostClass>) => {
          this.forumPosts = result;
        });
      });
    // }
    // else{
    //   //redirect
    // }

  }

}
