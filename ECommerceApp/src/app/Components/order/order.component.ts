import { Component, OnInit } from '@angular/core';
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
export class OrderComponent implements OnInit {
  Categories: iCategory[] ;
  selectedCategory: number = 0;
  totalOrderPrice: number = 0;
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

  ngOnInit() {
    
  }

}
