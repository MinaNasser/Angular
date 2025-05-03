import { Component, EventEmitter, inject, Input, OnChanges, Output } from '@angular/core';
import { iProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { iCategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { SquarePipe } from '../../pipe/square.pipe';
import { StaticProductService } from '../../services/static-product.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HighlightCardDirective,
    SquarePipe,
    // RouterLink

  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges {


  products: iProduct[];
  @Input() recievedCategoryID: number = 0;
  FilteredProduct: iProduct[] = [];
  totalOrderPrice: number = 0;
  MyDate: Date = new Date();
  MyNumber: number = 2;


  @Output() onTotalOrderPriceChanged: EventEmitter<number>;



  // productService=inject(StaticProductService);
  constructor(private _productService: StaticProductService, private router: Router) {
    this.products = this._productService.getProducts();
    this.onTotalOrderPriceChanged = new EventEmitter<number>();


  }
  Details(id  : number) {
    // this.router.navigate(['products-details'], { queryParams: { id: arg0 } });
    this.router.navigate(['/products-details', id]);
    console.log(id);
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
    } else if (this.recievedCategoryID == 0) {
      this.FilteredProduct = this.products
      return this.FilteredProduct;
    }
    else {
      this.FilteredProduct = this.products.filter((product) => product.categoryId == this.recievedCategoryID);
      return this.FilteredProduct;
    }

  }
  trackByFn(index: number, item: iProduct) {
    return item.id; // or item.id if you have a unique identifier property
  }
  ngOnChanges() {
    // this.Filter();
    this.FilteredProduct = this._productService.getProductsByCategory(this.recievedCategoryID);
  }
}
