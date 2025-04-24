import { Routes } from "@angular/router";
import { ProductListComponent } from "./Components/product-list/product-list.component";
import { todolistComponent } from "./Components/todolist/todolist.component";

import { AccountModule } from "../account/account.module";
import { ProductDetailsComponent } from "./Components/product-Details/product-Details.component";
import { HomeComponent } from "./Components/Home/Home.component";
import { ProductsComponent } from "./Components/products/products.component";
import { AboutUsComponent } from "./Components/about-us/about-us.component";
import { ContactUsComponent } from "./Components/contact-us/contact-us.component";
import { CartComponent } from "./Components/Cart/Cart.component";
import { NotFoundComponent } from "./Components/notfound/notfound.component";


export let AppRouts:Routes=[
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'cart', component: CartComponent },
      { path: '**', component: NotFoundComponent }, // handle wrong routes
    {
        path: 'account', 
        loadChildren: () => import('../account/account.module').then(m => AccountModule)
    },
]