import { Component, OnInit} from '@angular/core';
import { PostApiService } from '../post-api.service';
import { Router } from '@angular/router';
import { PostClass } from '../post-class';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.css']
})

export class CreatePostPageComponent implements OnInit{

  postTitle: string = "";
  postAnonymously: boolean = false;
  postDescription: string = "";
  postData: PostClass = new PostClass('','','','',false,false,'',new Date(),0,0,[]);

  constructor(private postAPiService: PostApiService, private router: Router) {}

  ngOnInit(): void {}

  createNewPost() {
    this.postData = {
      id:'',
      accountId: "9fa4f6c0-27dd-4b30-90fc-ca34443bbbd4",
      title: this.postTitle,
      author: "Uchenna123",
      isAnonymous: this.postAnonymously,
      isEdited: false,
      description: this.postDescription,
      dateTime: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    };

    this.postAPiService.createPost(this.postData).subscribe(
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
