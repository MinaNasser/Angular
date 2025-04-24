import { Component, OnInit } from '@angular/core';
import { IUserRegister } from '../../../Models/account';
import { AccountService } from '../../../Services/Account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
// Component ui 

//inject service 

//listen until responce 

user:IUserRegister = {
  UserName:"",
  PhoneNumber:"",
  Password:"",
  Role:"",
  ConformPassord:"",
  Email:""
};
  constructor(
    private accountSrv:AccountService,
  ) { }
  Send() {
    this.accountSrv.Register(this.user).subscribe({
      next: (res) => {
        console.log("Register Response:", res);
      },
      error: (err) => {
        console.error("Error:", err);
      }
    });
  }
  

}
