import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/Product.Service';
import { IProduct } from '../../../Models/Iproduct';
import { ICategory } from '../../../Models/Category';
import { CategoryService } from '../../../Services/Category.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Products: IProduct[] = [];  // قائمة المنتجات
  selectedCatagory: number = 0;  // الفئة المحددة
  categories:ICategory[] = [];  // قائمة الفئات

  constructor(private productsrv: ProductService , private CategorySer:CategoryService) {}

  ngOnInit(): void {
    // يتم تحميل المنتجات عند بداية تحميل الـ Component
    this.loadProducts();
  }

  loadProducts() {
    this.productsrv.FilterProductByCategory(this.selectedCatagory).subscribe({
      next: (data) => {
        this.Products = data;  // تعيين المنتجات بعد الفلترة
      },
      error: (err) => {
        console.error("Error fetching products:", err);
      }
    });
  }
  filter() {
    // عند اختيار فئة جديدة، يتم تحميل المنتجات مرة أخرى
    this.loadProducts();
  }
}
