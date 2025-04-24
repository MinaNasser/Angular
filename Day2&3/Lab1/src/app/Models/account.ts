export interface IUserRegister{
    
    PhoneNumber:string;
    ConformPassord:string;
    Password:string;
    Role:string;
    Email:string;
    UserName:string;
    
}


export interface IUserLogin{
    Method:string;
    Password:string;
}