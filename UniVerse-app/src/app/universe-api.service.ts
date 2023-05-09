import { Injectable } from '@angular/core';
import { PostClass } from "./post-class";
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniverseApiService {

  hostUrl:string = 'http://localhost:8080/';
  url:string = 'http://localhost:8080/data/posts.json';

  constructor(private http: HttpClient) {
  }

  getPosts(){
    return this.http.get<PostClass[]>(this.hostUrl + 'posts');
  }
  getSpecificPost(id:string){
    return this.http.get<any>(this.hostUrl + 'json/posts/' + id + '.json');
  }

}