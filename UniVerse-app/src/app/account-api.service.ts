import { Injectable } from '@angular/core';
import { AccountClass } from "./account-class";
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  hostUrl:string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  getAccounts(){
    return "";
  }
  
  getSpecificAccount(id:string){
    return "";
  }

}