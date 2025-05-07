import { OrderComponent } from './Components/order/order.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ProductComponent } from './Components/product/product.component';
import { VisionComponent } from './Components/vision/vision.component';
import { ValuesComponent } from './Components/values/values.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuard } from './Guards/Auth.guard';
import { ProductDetailsGuard } from './Guards/product-details.guard';
import { AddProductComponent } from './Components/add-product/add-product.component';

export const routes: Routes = [
  {path : '' ,redirectTo : 'home' , pathMatch : 'full' , title : 'Home'},
  {path : 'home' ,component : HomeComponent, title : 'Home'},
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path : 'products' , component : ProductComponent, title : 'Products' , canActivate : [authGuard]},
  {path : 'products-details/:id' , component : ProductDetailsComponent, title : 'Product Details' , canActivate : [ProductDetailsGuard] },
  {path : 'order' , component : OrderComponent, title : 'Order'},
  {path : 'about' , component : AboutUsComponent, title : 'About Us',
    children: [
    {path : '' ,pathMatch : 'full',redirectTo : 'vision', title : 'Vision'},
    {path : 'vision' , component : VisionComponent, title : 'Vision'},
    {path : 'values' , component : ValuesComponent, title : 'Values'},
  ]},
  {path : 'add-product' , component : AddProductComponent, title : 'Add Product'},



  //Wild Card Route for 404 request
  {path : '**' ,component : NotFoundComponent },

];
