import { Component, OnInit } from '@angular/core';
import { UniverseApiService } from '../post-api.service';
import { PostClass } from '../post-class';

@Component({
  selector: 'app-post-index-page',
  templateUrl: './post-index-page.component.html',
  styleUrls: ['./post-index-page.component.css']
})

export class PostIndexPageComponent implements OnInit {

  posts: Array<PostClass>= [];

  constructor(private post$: UniverseApiService) {
    post$.getPosts().subscribe((result: Array<PostClass>)=>{
      this.posts = result;
    })
  }

  ngOnInit(): void {

  }


}