import { OrderComponent } from './Components/order/order.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ProductComponent } from './Components/product/product.component';

export const routes: Routes = [
  {path : '' ,component : HomeComponent },
  {path : 'home' ,component : HomeComponent },
  {path : 'products' , component : ProductComponent},
  {path : 'productDetails' , component : ProductDetailsComponent},
  {path : 'order' , component : OrderComponent},
  {path : 'about' , component : AboutUsComponent},


  //Wild Card Route for 404 request
  {path : '**' ,component : NotFoundComponent },

];
