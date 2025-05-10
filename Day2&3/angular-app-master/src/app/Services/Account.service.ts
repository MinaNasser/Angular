import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

    constructor() { }
    Login(method: string, password: string): string {
        if (method == "email" && password == "123456") {
            return "Login Success";
        } else if (method == "phone" && password == "123456") {
            return "Login Success";
        } else {
            return "Login Failed";
        }
    }
    Register(method: string, password: string): string {
        if (method == "email" && password == "123456") {
            return "Register Success";
        } else if (method == "phone" && password == "123456") {
            return "Register Success";
        } else {
            return "Register Failed";
        }
    }
    Logout(): string {
        return "Logout Success";
    }
}
