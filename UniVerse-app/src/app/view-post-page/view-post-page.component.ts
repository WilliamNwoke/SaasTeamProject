import { Component } from '@angular/core';
import { PostApiService } from '../post-api.service';
import { ActivatedRoute } from '@angular/router';
import { PostClass } from '../post-class';

@Component({
  selector: 'app-view-post-page',
  templateUrl: './view-post-page.component.html',
  styleUrls: ['./view-post-page.component.css']
})

export class ViewPostPageComponent{
  postId: string | null = null;
  post: PostClass | null = null;

  constructor(private postApiService: PostApiService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
      this.getSpecificPost(this.postId);
    });
  }
  
  getSpecificPost(id:any){
    this.postApiService.getSpecificPost(id).subscribe((result: PostClass)=>{
      this.post = result;
    })
  }


}

