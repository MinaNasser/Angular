import { Component } from '@angular/core';
import { AccountService } from '../../../Services/Account.service';
import { IUserRegister } from '../../../Models/account';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false,
})
export class RegisterComponent {

  // تعريف كائن المستخدم
  user: IUserRegister = {
    UserName: "",
    PhoneNumber: "",
    Password: "",
    ConformPassord: "",
    Email: "",
    Role: ""
  };

  // حقول العرض للرسائل
  message: string = "";

  constructor(private accountSrv: AccountService) { }

  // دالة إرسال البيانات إلى السيرفر
  Send() {
    const method = 'email'; // أو 'phone' حسب اختيار المستخدم
    const password = this.user.Password;

    // إرسال البيانات
    this.accountSrv.Register(method, password, this.user).subscribe({
      next: (res) => {
        console.log("Register Response:", res);
        this.message = res.Massage; // عرض الرسالة
      },
      error: (err) => {
        console.error("Error:", err);
        this.message = "An error occurred during registration."; // عرض الخطأ
      }
    });
  }
}
