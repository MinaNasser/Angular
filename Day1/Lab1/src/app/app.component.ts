import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  imports: [
    // Add your imports here
    // Example: import { Component } from '@angular/core';
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'Lab1';
}
