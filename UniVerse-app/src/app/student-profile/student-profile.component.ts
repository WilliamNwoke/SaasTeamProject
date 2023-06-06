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
  account: Account = new Account('','','','','','','','');

  constructor(private accountApiService: AccountApiService, private router: Router) {

   }
    ngOnInit(): void {
      this.accountApiService.getAccountId().subscribe((result: Account) => {
        this.account = result;
        console.log("REAL OAUTH: "+ this.account.oAuthId);
      });

      if (this.account.imageUrl.length === 0) {
        setTimeout(() => {
          this.router.navigateByUrl('localhost:8080/auth/google');
        }, 3000);
    }
  }
}