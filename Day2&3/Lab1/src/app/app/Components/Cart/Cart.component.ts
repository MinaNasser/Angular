import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Cart',
  standalone: false,
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = []; // Replace 'any' with the appropriate type for your cart items
  totalPrice: number = 0;
  totalItems: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
