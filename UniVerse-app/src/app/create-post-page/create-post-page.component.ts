import { Component, OnInit} from '@angular/core';
import { ForumPostApiService } from '../forumpost-api.service';
import { Router } from '@angular/router';
import { ForumPostClass } from '../forumpost-class';
import { AccountApiService } from '../account-api.service';
import { Account } from '../account-class';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.css']
})

export class CreatePostPageComponent implements OnInit{

  postTitle: string = "";
  postAnonymously: boolean = false;
  postDescription: string = "";
  postData: ForumPostClass = new ForumPostClass('','','','',false,false,'',new Date(),0,0,[]);
  account: Account = new Account('','','','','','','','');
  oAuthId: string = "";
  accountId: string = "";
  username: string = "";

  constructor(private forumPostApiService: ForumPostApiService, private router: Router, private accountApiService: AccountApiService) {
    this.accountApiService.getAccountId().subscribe((result: Account) => {
      this.account = result;
      this.oAuthId = this.account.oAuthId;
      this.accountId = this.account.oAuthId;
      this.username = this.account.username;
    });
  }

  ngOnInit(): void {}

  createNewPost() {
    if(this.oAuthId == ''|| this.accountId == ''|| this.username == '' ){
      this.oAuthId ='';
      this.accountId = '';
      this.username = 'Anonymous';
    }
    this.postData = {
      id:'',
      accountId: this.accountId,
      title: this.postTitle,
      author: this.username,
      isAnonymous: this.postAnonymously,
      isEdited: false,
      description: this.postDescription,
      dateTime: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    };
    this.forumPostApiService.createPost(this.postData).subscribe(
      response => {
        console.log(response);
      }
    );

    this.router.navigate(['/']);
  }
  handleTitleChange(event: Event) {
    this.postTitle = (event.target as HTMLInputElement).value;
  }

  handleAnonymousChange(event: Event) {
    this.postAnonymously = (event.target as HTMLInputElement).checked;
  }

  handleDescriptionChange(event: Event) {
    this.postDescription = (event.target as HTMLTextAreaElement).value;
    console.log(this.postDescription)
  }
}
