import { Component, } from '@angular/core';
import { ForumPostApiService } from '../forumpost-api.service';
import { ForumPostClass } from '../forumpost-class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-forumposts',
  templateUrl: './my-forumposts.component.html',
  styleUrls: ['./my-forumposts.component.css']
})

export class MyForumpostsComponent {

  forumPosts: Array<ForumPostClass>= [];

  constructor(private forumPostApiService: ForumPostApiService, private router: Router) {
  }

  ngOnInit(): void {
    const id = '9fa4f6c0-27dd-4b30-90fc-ca34443bbbd4'
    this.forumPostApiService.getAllMyForumPost(id).subscribe((result: Array<ForumPostClass>) => {
      this.forumPosts = result;
    })

  }

}
