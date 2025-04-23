import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProductsComponent } from "./components/products/products.component";
import { NgModule } from "@angular/core";
import { CheckImagePipe } from "../Pipes/CheckImage.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CheckImagePipe
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
