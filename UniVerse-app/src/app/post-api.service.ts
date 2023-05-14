import { Injectable } from '@angular/core';
import { PostClass } from "./post-class";
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  hostUrl:string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  getPosts(){
    return this.http.get<PostClass[]>(this.hostUrl + 'posts');
  }
  
  getSpecificPost(id:string){
    return this.http.get<PostClass>(this.hostUrl + 'post' + "/" + id);
  }

}