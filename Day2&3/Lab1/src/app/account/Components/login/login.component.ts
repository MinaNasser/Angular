import { Component, OnInit } from '@angular/core';
import { IUserLogin } from '../../../Models/account';
import { AccountService } from '../../../Services/Account.service';  // ✅ تأكد من اسم الملف الصغير

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUserLogin = {
    Method: '',
    Password: ''
  };

  resultMessage: string = '';

  constructor(private accountService: AccountService) {}

  ngOnInit() {}

  loginUser() {
    this.accountService.Login(this.user.Method, this.user.Password).subscribe({
      next: (res) => {
        this.resultMessage = res;
        console.log("Login Response:", res);
      },
      error: (err) => {
        this.resultMessage = 'An error occurred';
        console.error("Login Error:", err);
      }
    });
  }
}
