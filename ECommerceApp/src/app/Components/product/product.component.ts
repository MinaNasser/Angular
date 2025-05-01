import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { iProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { iCategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { SquarePipe } from '../../pipe/square.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HighlightCardDirective,
    SquarePipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges {

  products: iProduct[];
  @Input() recievedCategoryID: number = 0;


  // define event


  FilteredProduct: iProduct[] = [];
  totalOrderPrice: number = 0;
  MyDate: Date = new Date();
  MyNumber: number = 2;

  @Output() onTotalOrderPriceChanged : EventEmitter<number> ;



  constructor() {

    this.onTotalOrderPriceChanged = new EventEmitter<number>();
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
  Buy(count: string, price: number) {
    const countNumber = parseInt(count, 10);
    if (!isNaN(countNumber) && countNumber > 0) {
      this.totalOrderPrice += countNumber * price;
      // fIRE EVENT TO PARENT
      this.onTotalOrderPriceChanged.emit(this.totalOrderPrice);
    }
  }

  Filter() {
    if (this.recievedCategoryID != 0) {
      this.FilteredProduct = this.products.filter((product) => product.categoryId == this.recievedCategoryID);
      // return this.products.filter((product) => product.categoryId == this.selectedCategory);
      return this.FilteredProduct;
    } else if( this.recievedCategoryID == 0) {
      this.FilteredProduct = this.products
      return this.FilteredProduct;
    }
    else {
      this.FilteredProduct = this.products.filter((product) => product.categoryId == this.recievedCategoryID);
      return this.FilteredProduct;
    }

  }
  trackByFn(  index: number, item: iProduct) {
    return item.id; // or item.id if you have a unique identifier property
  }
  ngOnChanges() {
    this.Filter();
  }
}
