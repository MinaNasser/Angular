import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './Components/register/register.component';
import { RouterModule } from '@angular/router';
import { accountroutes } from './account.routes';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(accountroutes),
  ],
  providers:[
    provideHttpClient( withFetch(),)
  ]
})
export class AccountModule { }
