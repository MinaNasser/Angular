import { Routes } from "@angular/router";
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import { NotfoundComponent } from "../app/Components/notfound/notfound.component";

export let accountroutes:Routes=[
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"**",component:NotfoundComponent}
]