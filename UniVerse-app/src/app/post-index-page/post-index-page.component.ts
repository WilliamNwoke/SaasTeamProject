import { Component, OnInit } from '@angular/core';
import { ForumPostApiService } from '../forumpost-api.service';
import { ForumPostClass } from '../forumpost-class';

@Component({
  selector: 'app-post-index-page',
  templateUrl: './post-index-page.component.html',
  styleUrls: ['./post-index-page.component.css']
})

export class PostIndexPageComponent implements OnInit {

  
  posts: Array<ForumPostClass>= [];
  filteredPosts: Array<ForumPostClass>= [];

  constructor(private forumPostApiService: ForumPostApiService) {
    forumPostApiService.getPosts().subscribe((result: Array<ForumPostClass>)=>{
      this.posts = result;
      this.filteredPosts = result;
    })
  }

  ngOnInit(): void {
  }

  filterByRecent(){
    this.filteredPosts.sort((a, b) => a.dateTime.getTime()- b.dateTime.getTime());
  }

  filterByTop(){
    this.filteredPosts.sort((a, b) => b.likes - a.likes);
  }


}