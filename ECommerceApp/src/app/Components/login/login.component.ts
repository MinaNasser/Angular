import { Component } from '@angular/core';
import { UserAuthService } from '../../services/userAuth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    isLoggedIn: boolean ;
  constructor(
    private _userAuth: UserAuthService
  ) { 
    this.isLoggedIn = this._userAuth.getUserLoggedIn();
  }

  login() {
    this._userAuth.Login();
    this.isLoggedIn = this._userAuth.getUserLoggedIn();
  }

  logout() {
    this._userAuth.logOut();
    this.isLoggedIn = this._userAuth.getUserLoggedIn();
  }

}
