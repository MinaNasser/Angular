import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from './Components/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    HeaderComponent,
    FooterComponent,
    ProductComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ECommerceApp';
}
