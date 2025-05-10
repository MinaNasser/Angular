import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = 'http://localhost:5094/api/account'; // API URL الخاص بـ ASP.NET Core

  constructor(private http: HttpClient) { }

  // تسجيل الدخول
  Login(emailOrUsername: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { Username: emailOrUsername, Password: password });
  }

  // التسجيل
  Register(method: string, password: string, user: any): Observable<any> {
    const data = { ...user, method, password };  // دمج البيانات
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // تسجيل الخروج
  Logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/signout`, {});
  }
}
