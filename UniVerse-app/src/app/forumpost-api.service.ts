import { Injectable } from '@angular/core';
import { ForumPostClass } from "./forumpost-class";
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumPostApiService {

  // hostUrl:string = 'https://universe0.azurewebsites.net/';
  hostUrl:string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }
  

  getPosts(){
    return this.http.get<ForumPostClass[]>(this.hostUrl + 'forumposts');
  }

  getSpecificPost(id:string){
    return this.http.get<ForumPostClass>(this.hostUrl + 'forumpost' + "/" + id);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post<any>(this.hostUrl + 'forumposts', postData)
  }

  getAllMyForumPost(id:string){
    return this.http.get<ForumPostClass[]>(this.hostUrl + 'forumposts' + "/" + id);
  }

}
