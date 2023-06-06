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
  account: Account = new Account('','','','','','','','');

  constructor(private forumPostApiService: ForumPostApiService, private router: Router, private accountApiService: AccountApiService) {
  }

  ngOnInit(): void {
      this.accountApiService.getAccountId().subscribe((result: Account) => {
        this.account = result;
        console.log("Angular AccountId: " + this.account.id);
        console.log("URL: " + this.account.imageUrl);
        this.forumPostApiService.getAllMyForumPost(this.account.id).subscribe((result: Array<ForumPostClass>) => {
          this.forumPosts = result;
        });
      });

  }

}
