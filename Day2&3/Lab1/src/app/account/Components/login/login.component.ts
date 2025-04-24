import { Component } from '@angular/core';
import { AccountService } from '../../../Services/Account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent {
  method: string = ''; // تم تعديل "username" إلى "method"
  password: string = '';
  message: string = '';

  constructor(private accountService: AccountService) {}

  login() {
    this.accountService.Login(this.method, this.password).subscribe(
      (response) => {
        if (response.Status === 200) {
          this.message = 'Login Success!';
          localStorage.setItem('authToken', response.Token); // تخزين الـ Token في localStorage
          console.log('Role:', response.Role);
        } else {
          this.message = response.Massage; // عرض الرسالة من الـ API
        }
      },
      (error) => {
        this.message = 'An error occurred during login.';
      }
    );
  }
}
