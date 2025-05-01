import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { iCategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ProductComponent
  ],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit ,AfterViewInit {
  Categories: iCategory[];
  selectedCategory: number = 0;
  totalOrderPrice: number = 0;
  // non  null assertion operator
  // myInput!: ElementRef;
  @ViewChild('userName') myInput!: ElementRef;


  constructor() {

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
  ngAfterViewInit(): void {
    this.myInput.nativeElement.focus();
    console.log(this.myInput.nativeElement.value);
  }

  ngOnInit() {

  }
  /**
   * Event handler for when the total order price changes in the product list
   * @param totalOrderPrice the new total order price
   */
  CalculateTotalOrderPrice(totalOrderPrice: number) {
    this.totalOrderPrice = totalOrderPrice;
  }



}
