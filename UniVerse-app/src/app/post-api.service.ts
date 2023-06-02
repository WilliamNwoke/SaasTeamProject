import { Injectable } from '@angular/core';
import { PostClass } from "./post-class";
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  hostUrl:string = 'https://universe0.azurewebsites.net/';

  constructor(private http: HttpClient) {
  }

  getPosts(){
    return this.http.get<PostClass[]>(this.hostUrl + 'posts');
  }

  getSpecificPost(id:string){
    return this.http.get<PostClass>(this.hostUrl + 'post' + "/" + id);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post<any>(this.hostUrl + 'posts', postData)
  }

}
