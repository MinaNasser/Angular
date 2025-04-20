import { Component } from '@angular/core';
import { iProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { iCategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
    
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  products: iProduct[];
  Categories: iCategory[] ;
  totalOrderPrice: number = 0;
  selectedCategory: number = 0;
  constructor() {
    this.products = [
      { id: 1, name: 'Laptop', price: 100, quantity: 10, imgUrl: 'https://picsum.photos/200/300', categoryId: 1 },
      { id: 2, name: 'Laptop Dell', price: 100, quantity: 10, imgUrl: 'https://picsum.photos/200/301', categoryId: 1 },
      { id: 3, name: 'Phone', price: 200, quantity: 20, imgUrl: 'https://picsum.photos/200/302', categoryId: 2 },
      { id: 4, name: 'Tablet', price: 300, quantity: 30, imgUrl: 'https://picsum.photos/200/303', categoryId: 2 },
      { id: 5, name: 'Monitor', price: 400, quantity: 40, imgUrl: 'https://picsum.photos/200/304', categoryId: 4 },
      { id: 6, name: 'Mouse', price: 500, quantity: 50, imgUrl: 'https://picsum.photos/200/305', categoryId: 4 },
      { id: 7, name: 'Keyboard', price: 600, quantity: 60, imgUrl: 'https://picsum.photos/200/306', categoryId: 4 },
      { id: 8, name: 'Headphones', price: 700, quantity: 70, imgUrl: 'https://picsum.photos/200/307', categoryId: 4 },
    ];
    this.Categories = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Clothing' },
      { id: 3, name: 'Home' },
      { id: 4, name: 'Sports' },
      { id: 5, name: 'Beauty' },
      { id: 6, name: 'Toys' },
      { id: 7, name: 'Books' },
      { id: 8, name: 'Furniture' },
      { id: 9, name: 'Jewelry' },
      { id: 10, name: 'Shoes' },
    ];
  }
  Buy(count: string, price: number) {
    // Convert the count to a number and check if it's a valid number
    const countNumber = parseInt(count, 10);
    this.totalOrderPrice += countNumber * price;
  }
  Filter() {
    if (this.selectedCategory != 0) {
      return this.products.filter((product) => product.categoryId == this.selectedCategory);
    } else if( this.selectedCategory == 0) {
      return this.products;
    }
    return this.products.filter((product) => product.categoryId == this.selectedCategory);
  }
}
