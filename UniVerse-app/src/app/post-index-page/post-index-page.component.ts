import { Component, OnInit } from '@angular/core';
import { PostApiService } from '../post-api.service';
import { PostClass } from '../post-class';

@Component({
  selector: 'app-post-index-page',
  templateUrl: './post-index-page.component.html',
  styleUrls: ['./post-index-page.component.css']
})

export class PostIndexPageComponent implements OnInit {

  
  posts: Array<PostClass>= [];
  filteredPosts: Array<PostClass>= [];

  constructor(private postApiService: PostApiService) {
    postApiService.getPosts().subscribe((result: Array<PostClass>)=>{
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