import { Component } from '@angular/core';
import { iProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule
    
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: iProduct[];
  constructor() {
    this.products = [
      { id: 1, name: 'Laptop', price: 100, quantity: 10, imgUrl: 'https://picsum.photos/200/300', categoryId: 1 },
      { id: 2, name: 'Laptop Dell', price: 100, quantity: 10, imgUrl: 'https://picsum.photos/200/300', categoryId: 1 },
      { id: 3, name: 'Phone', price: 200, quantity: 20, imgUrl: 'https://picsum.photos/200/300', categoryId: 2 },
      { id: 4, name: 'Tablet', price: 300, quantity: 30, imgUrl: 'https://picsum.photos/200/300', categoryId: 2 },
      { id: 5, name: 'Monitor', price: 400, quantity: 40, imgUrl: 'https://picsum.photos/200/300', categoryId: 4 },
      { id: 6, name: 'Mouse', price: 500, quantity: 50, imgUrl: 'https://picsum.photos/200/300', categoryId: 4 },
      { id: 7, name: 'Keyboard', price: 600, quantity: 60, imgUrl: 'https://picsum.photos/200/300', categoryId: 4 },
      { id: 8, name: 'Headphones', price: 700, quantity: 70, imgUrl: 'https://picsum.photos/200/300', categoryId: 4 },
    ];
  }
}
