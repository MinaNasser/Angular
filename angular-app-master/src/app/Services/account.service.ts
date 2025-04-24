import { Injectable } from '@angular/core';
import { IUserRegister } from '../Models/account';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
Url:string= "http://localhost:5094/api/Account/"
constructor(private http:HttpClient) { }

Login(method:string,password:string):Observable<any>{
  return this.http.post(this.Url+"Login",{method:method,password:password})
}




Register(user:IUserRegister):Observable<any>{
  return this.http.post(this.Url+"Register",user)
}




Logout(){
  //
}
}
