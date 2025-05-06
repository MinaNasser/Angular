import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  // isUserLoggedIn: boolean = false;
  private authSubject: BehaviorSubject<boolean>;

  constructor() {
    this.authSubject = new BehaviorSubject<boolean>(false);
  }

  // public setRoles(roles: string[]): void {
  //   localStorage.setItem('roles', JSON.stringify(roles));
  // }

  // public getRoles(): string[] {
  //   return JSON.parse(localStorage.getItem('roles') || '[]');
  // }

   logOut(): void {
    localStorage.removeItem('token');
    this.authSubject.next(false);
  }


  Login(){
    localStorage.setItem('token', 'dahsgdhasgdhsagdhsahvdsghhd');
    this.authSubject.next(true);
  }

  getUserLoggedIn(): boolean {
    return (localStorage.getItem('token') == null) ? false : true;
  }

  getAuthSubject(): BehaviorSubject<boolean> {
    return this.authSubject;
  }
  


}
