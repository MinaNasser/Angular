import { Injectable } from '@angular/core';
import { iProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
  private products: iProduct[];
  constructor() {
    this.products = [
      { id: 1, name: 'Laptop', price: 100, quantity: 0, imgUrl: 'https://picsum.photos/200/300', categoryId: 1 },
      { id: 2, name: 'Laptop Dell', price: 100, quantity: 1, imgUrl: 'https://picsum.photos/200/301', categoryId: 1 },
      { id: 3, name: 'Phone', price: 200, quantity: 2, imgUrl: 'https://picsum.photos/200/302', categoryId: 2 },
      { id: 4, name: 'Tablet', price: 300, quantity: 30, imgUrl: 'https://picsum.photos/200/303', categoryId: 2 },
      { id: 5, name: 'Monitor', price: 400, quantity: 40, imgUrl: 'https://picsum.photos/200/304', categoryId: 4 },
      { id: 6, name: 'Mouse', price: 500, quantity: 50, imgUrl: 'https://picsum.photos/200/305', categoryId: 4 },
      { id: 7, name: 'Keyboard', price: 600, quantity: 60, imgUrl: 'https://picsum.photos/200/306', categoryId: 4 },
      { id: 8, name: 'Headphones', price: 700, quantity: 70, imgUrl: 'https://picsum.photos/200/307', categoryId: 4 },
    ];

  }
  getProducts(): iProduct[] {
    return this.products;
  }
  getProduct(id: number): iProduct|undefined {
    let product = this.products.find(product => product.id == id);
    return product?product:undefined;
  }
  getProductsByCategory(categoryId: number): iProduct[]  {
    if(categoryId==0)
    return this.products;

    return this.products.filter(product => product.categoryId == categoryId);

  }
  getProductsByPrice(minPrice: number, maxPrice: number): iProduct[] {
    return this.products.filter(product => product.price >= minPrice && product.price <= maxPrice);
  }
  getProductById(id: number): iProduct|undefined {
    return this.products.find(product => product.id == id);
  }

}
