import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { iProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { iCategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { SquarePipe } from '../../pipe/square.pipe';
import { StaticProductService } from '../../services/static-product.service';
import { Router, RouterLink } from '@angular/router';
import { APIProductService } from '../../services/apiproduct.service';

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
export class ProductComponent implements OnChanges , OnInit {


  products: iProduct[]=[] as iProduct[];
  @Input() recievedCategoryID: number = 0;
  FilteredProducts: iProduct[] = [];
  totalOrderPrice: number = 0;
  MyDate: Date = new Date();
  MyNumber: number = 2;


  @Output() onTotalOrderPriceChanged: EventEmitter<number>;



  // productService=inject(StaticProductService);
  constructor(private _productService: APIProductService, private router: Router) {
    
    this.onTotalOrderPriceChanged = new EventEmitter<number>();


  }
  ngOnInit(): void {
    this._productService.GetAllProducts().subscribe(
      next => {
        this.products = next;
        this.FilteredProducts = this.products;
      } 
    );
  }
  // Details(id  : number) {
  //   // this.router.navigate(['products-details'], { queryParams: { id: arg0 } });
  //   this.router.navigate(['/products-details', id]);
  //   console.log("from details btn"+ id);
  // }

  Details(id: number) {

      this.router.navigate(['/products-details', id]);

    console.log("Navigating to: ", id);
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
      this.FilteredProducts = this.products.filter((product) => product.categoryId == this.recievedCategoryID);
      // return this.products.filter((product) => product.categoryId == this.selectedCategory);
      return this.FilteredProducts;
    } else if (this.recievedCategoryID == 0) {
      this.FilteredProducts = this.products
      return this.FilteredProducts;
    }
    else {
      this.FilteredProducts = this.products.filter((product) => product.categoryId == this.recievedCategoryID);
      return this.FilteredProducts;
    }

  }
  trackByFn(index: number, item: iProduct) {
    return item.id; // or item.id if you have a unique identifier property
  }
  ngOnChanges() {
    // this.Filter();
     this._productService.GetProductsByCategory(this.recievedCategoryID).subscribe(
       next => {
         this.FilteredProducts = next;
       }
     );
  }
}
