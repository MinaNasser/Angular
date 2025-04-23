import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';



@NgModule({
  declarations: [

    LoginComponent,
    RegisterComponent


    
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
