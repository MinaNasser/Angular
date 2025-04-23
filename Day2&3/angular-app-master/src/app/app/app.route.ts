import { Routes } from "@angular/router";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { todolistComponent } from "./Components/todolist/todolist.component";
import { NotfoundComponent } from "./Components/notfound/notfound.component";

export let AppRouts:Routes=[
    {path:"products",component:ProductListComponent},
    {path:"todolist",component:todolistComponent},
    {path:"**" , component:NotfoundComponent}
]