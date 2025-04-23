import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProductsComponent } from "./components/products/products.component";
import { NgModule } from "@angular/core";
import { CheckImagePipe } from "../Pipes/CheckImage.pipe";
import { CutTextPipe } from "../Pipes/CutText.pipe";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';

import { Router, RouterLink, RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CheckImagePipe,
    CutTextPipe,
    CommonModule,
    RouterModule,
    RouterLink,
    CommonModule,
  ],
  exports: [
    CutTextPipe,
    CheckImagePipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
