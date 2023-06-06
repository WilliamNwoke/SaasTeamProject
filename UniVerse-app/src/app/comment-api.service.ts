import { HttpClient, HttpRequest } from '@angular/common/http';
import { CommentClass } from "./comment-class";
import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentApiService {

  hostUrl:string = 'https://universe0.azurewebsites.net/';
  // hostUrl:string = 'http://localhost:8080/';

  commentAdded: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http: HttpClient) { }

  getPostComments(PostId:string){
    return this.http.get<CommentClass[]>(this.hostUrl + 'comments'+ "/" + PostId);
  }

  addComment(commentData: any): Observable<any> {
    return this.http.post<CommentClass>(this.hostUrl + 'comments', commentData)
  }

  notifyCommentAdded() {
    this.commentAdded.emit();
  }
}
