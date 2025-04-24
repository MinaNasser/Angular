import { Routes } from "@angular/router";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { todolistComponent } from "./Components/todolist/todolist.component";
import { NotfoundComponent } from "./Components/notfound/notfound.component";
import { AccountModule } from "../account/account.module";
import { ProductDetailsComponent } from "./Components/product-Details/product-Details.component";

export let AppRouts:Routes=[
    {path:"",redirectTo:"products",pathMatch:"full"},
    {path:"product",redirectTo:"products",pathMatch:"full"},
    {path:"products",component:ProductListComponent,title:"Product List"},
    {path:"todolist",component:todolistComponent},
    {path:"product/:id",component:ProductDetailsComponent},
    {
        path: 'account', 
        loadChildren: () => import('../account/account.module').then(m => AccountModule)
    },


    {path:"**" , component:NotfoundComponent}
]