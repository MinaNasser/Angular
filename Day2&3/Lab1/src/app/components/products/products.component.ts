import { Component } from '@angular/core';
import { IProduct } from '../../Models/Iproduct';
import { ProductService } from '../../Services/Product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent {
  ProductList: IProduct[];
  constructor(private productService: ProductService) {
    this.ProductList = this.productService.GetAllProducts();
    
  }
  addToCart(product: IProduct) {
    alert(`${product.Name} added to cart`);
  }
  viewDetails(productId: number) {
    alert(`View details for product ID: ${productId}`);
  }
}

