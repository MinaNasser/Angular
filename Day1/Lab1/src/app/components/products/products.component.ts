import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent {
  ProductList: IProduct[];
  constructor() {
    this.ProductList = [
      { ID: 1, Name: "Lenvo thinpad X230", Price: 100000, Quantity: 10, Img: "https://picsum.photos/200" },
      { ID: 2, Name: "Dell", Price: 2002020, Quantity: 20, Img: "https://picsum.photos/200" },
      { ID: 3, Name: "Lenovo Tab", Price: 100888, Quantity: 10, Img: "https://picsum.photos/200" },
      { ID: 4, Name: "Samsung Tab", Price: 1000000, Quantity: 10, Img: "https://picsum.photos/200" },
      { ID: 5, Name: "Samsung note 10", Price: 100777, Quantity: 10, Img: "https://picsum.photos/200" },
      { ID: 6, Name: "Samsung S10", Price: 100, Quantity: 10, Img: "https://picsum.photos/200" },
      { ID: 7, Name: "tochiba Utlra", Price: 60000, Quantity: 14, Img: "https://fakeimg.pl/200x100" },
      { ID: 8, Name: "Apple Utlra", Price: 7800060, Quantity: 6, Img: "https://fakeimg.pl/200x100" },
      { ID: 9, Name: "test Utlra", Price: 7800060, Quantity: 3, Img: "https://fakeimg.pl/200x100" },
      { ID: 10, Name: "jhgfjxz", Price: 44444444, Quantity: 33, Img: "https://picsum.photos/200" }
    ];
  }
  addToCart(product: IProduct) {
    alert(`${product.Name} added to cart`);
  }
}

