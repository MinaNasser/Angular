import { OrderComponent } from './Components/order/order.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ProductComponent } from './Components/product/product.component';
import { VisionComponent } from './Components/vision/vision.component';
import { ValuesComponent } from './Components/values/values.component';

export const routes: Routes = [
  {path : '' ,component : HomeComponent , title : 'Home'},
  {path : 'home' ,component : HomeComponent, title : 'Home'},
  {path : 'products' , component : ProductComponent, title : 'Products'},
  {path : 'productDetails' , component : ProductDetailsComponent, title : 'Product Details'},
  {path : 'order' , component : OrderComponent, title : 'Order'},
  {path : 'about' , component : AboutUsComponent, title : 'About Us',
    children : [
    {path : '' ,pathMatch : 'full',redirectTo : 'vision', title : 'Vision'},
    {path : 'vision' , component : VisionComponent, title : 'Vision'},
    {path : 'values' , component : ValuesComponent, title : 'Values'},
  ]},


  //Wild Card Route for 404 request
  {path : '**' ,component : NotFoundComponent },

];
