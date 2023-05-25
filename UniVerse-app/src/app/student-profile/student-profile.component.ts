import { Component, OnInit } from '@angular/core';
import { Account } from '../account-class';
import { AccountApiService } from '../account-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  userAccount: Account = new Account(
    '9fa4f6c0-27dd-4b30-90fc-ca34443bbbd4',
      'Uchenna1233445',
      'Uche',
      'Somebody son go find me oneday',
      'mabuthuraya122@seattleu.edu',
      'College of Science and Engineering'
  );

  constructor(private accountApiService: AccountApiService, private router: Router) { }
  

    ngOnInit(): void {
      this.userAccount = {
        id: '9fa4f6c0-27dd-4b30-90fc-ca34443bbbd4',
        username: 'Uchenna1233445',
        fname: 'Uche',
        lname: 'Somebody son go find me oneday',
        email: 'mabuthuraya122@seattleu.edu',
        department: 'College of Science and Engineering'
      }
    }
}
