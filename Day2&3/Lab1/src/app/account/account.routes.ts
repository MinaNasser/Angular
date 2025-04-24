import { Routes } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import { LogoutComponent } from "./Components/Logout/Logout.component";
import { NotFoundComponent } from "../app/Components/NotFound/NotFound.component";

export let accountroutes:Routes=[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"logout",component:LogoutComponent},
    {path:"",redirectTo:"login",pathMatch:"full"},

    {path:"**",component:NotFoundComponent}
]