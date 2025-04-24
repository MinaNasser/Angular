import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AccountService {
  constructor() { }

  Login(method: string, password: string): Observable<string> {
    if ((method === "email" || method === "phone") && password === "123456") {
      return of("Login Success");
    }
    return of("Login Failed");
  }

  Register(user: any): Observable<string> {
    if ((user.Method === "email" || user.Method === "phone") && user.Password === "123456") {
      return of("Register Success");
    }
    return of("Register Failed");
  }

  Logout(): Observable<string> {
    return of("Logout Success");
  }
}
