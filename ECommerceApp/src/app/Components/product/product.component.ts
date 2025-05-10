import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { iProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { APIProductService } from '../../services/apiproduct.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HighlightCardDirective,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges, OnInit {

  products: iProduct[] = [];
  FilteredProducts: iProduct[] = [];
  paginatedProducts: iProduct[] = [];

  @Input() recievedCategoryID: number = 0;
  @Output() onTotalOrderPriceChanged: EventEmitter<number> = new EventEmitter<number>();

  totalOrderPrice: number = 0;

  currentPage: number = 1;
  itemsPerPage: number = 6;  // الحجم الأول للصفحة
  // pageSizeOptions: number[] = [3, 6, 9, 12];  // خيارات تغيير الحجم
  totalPages: number = 1;

  constructor(private _productService: APIProductService, private router: Router) {}

  ngOnInit(): void {
    this._productService.GetAllProducts().subscribe(next => {
      this.products = next;
      this.FilteredProducts = next;
      this.updatePaginatedProducts();
    });
  }

  ngOnChanges() {
    this._productService.GetProductsByCategory(this.recievedCategoryID).subscribe(next => {
      this.FilteredProducts = next;
      this.currentPage = 1;  // إعادة تعيين الصفحة إلى الأولى عند تغيير الفئة
      this.updatePaginatedProducts();
    });
  }

  Buy(count: string, price: number) {
    const countNumber = parseInt(count, 10);
    if (!isNaN(countNumber) && countNumber > 0) {
      this.totalOrderPrice += countNumber * price;
      this.onTotalOrderPriceChanged.emit(this.totalOrderPrice);
    }
  }

  Details(id: number) {
    this.router.navigate(['/products-details', id]);
  }

  updatePaginatedProducts() {
    // حساب النطاق الصحيح للصفحة الحالية
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    // تأكد من أن المنتجات التي تعرض تكون ضمن النطاق الصحيح
    this.paginatedProducts = this.FilteredProducts.slice(start, end);

    // حساب إجمالي عدد الصفحات بناءً على عدد المنتجات في FilteredProducts
    this.totalPages = Math.ceil(this.FilteredProducts.length / this.itemsPerPage);
  }

  nextPage() {
    // تأكد من عدم تجاوز العدد الإجمالي للصفحات
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedProducts();
    }
  }

  prevPage() {
    // تأكد من عدم الانتقال إلى صفحة سابقة إذا كانت الصفحة الحالية هي الأولى
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedProducts();
    }
  }

  onPageSizeChange() {
    this.currentPage = 1;  // إعادة تعيين الصفحة إلى الأولى عند تغيير الحجم
    this.updatePaginatedProducts();  // تحديث المنتجات بناءً على عدد العناصر في الصفحة
  }

  trackByFn(index: number, item: iProduct) {
    return item.id;
  }
}
