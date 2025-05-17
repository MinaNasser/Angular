import { iCategory } from './../../Models/icategory';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { iProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { APIProductService } from '../../services/apiproduct.service';
import { Router } from '@angular/router';
import { APICategoryService } from '../../services/apicategory.service';
import { debounceTime, Subject } from 'rxjs';

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

  // Debounce Subject for search term input
  searchTermSubject = new Subject<string>();

  // Other properties remain unchanged
  products: iProduct[] = [];
  FilteredProducts: iProduct[] = [];
  paginatedProducts: iProduct[] = [];

  @Input() recievedCategoryID: number = 0;
  @Output() onTotalOrderPriceChanged: EventEmitter<number> = new EventEmitter<number>();

  totalOrderPrice: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 6;  // Default items per page
  totalPages: number = 1;
  searchTerm: string = '';
  selectedCategoryID: number = 0;
  sortOrder: string = 'asc';
  Categories: iCategory[] = [];

  constructor(private _productService: APIProductService, private router: Router, private _categoryService: APICategoryService) { }

  ngOnInit(): void {
    // Fetch products and categories
    this._productService.GetAllProducts().subscribe(next => {
      console.log('Fetched products:', next); // Debug log
      this.products = next;
      this.FilteredProducts = next;
      this.updatePaginatedProducts();
    }, error => {
      console.error('Error fetching products:', error);
    });

    this._categoryService.GetAllCategories().subscribe(next => {
      console.log('Fetched categories:', next); // Debug log
      this.Categories = next;
    }, error => {
      console.error('Error fetching categories:', error);
    });

    // Set up the search term debounce
    this.searchTermSubject.pipe(debounceTime(500)).subscribe(term => {
      this.searchTerm = term;
      this.filterProducts(); // Apply filtering after debounce
    });
  }

  ngOnChanges() {
    // Fetch products by category when category ID changes
    this._productService.GetProductsByCategory(this.recievedCategoryID).subscribe(next => {
      // console.log('Filtered by category:', next); // Debug log
      this.FilteredProducts = next;
      this.currentPage = 1;  // Reset to first page when category changes
      this.updatePaginatedProducts();
    }, error => {
      console.error('Error fetching products by category:', error);
    });
  }

  onSearchTermChange(term: string) {
    this.searchTermSubject.next(term);  // Emit new search term for debouncing
  }

  // Handle search and filter products
filterProducts() {
  let filtered = this.products;

  // Filter by search term
  if (this.searchTerm.trim() !== '') {
    filtered = filtered.filter(product => product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    console.log("Filtered by Search Term:", filtered); // Debug log
  }

  // Filter by category (if a category is selected)
if (this.selectedCategoryID != 0) {  // Use != instead of !== to allow flexible comparison
  filtered = filtered.filter(product => String(product.categoryId) === String(this.selectedCategoryID));
  console.log("Category Filter:", this.selectedCategoryID); // Debug log
  console.log("Filtered by Category:", filtered); // Debug log
} else {
  // If "All Categories" is selected, reset to include all products
  console.log("No category filter applied (All Categories)");
  filtered = this.products; // Reset to all products
}


  // Update filtered products
  this.FilteredProducts = filtered;

  // Reset to the first page after filtering
  this.currentPage = 1;

  // Update paginated products
  this.updatePaginatedProducts();
}




  // Handle sorting
  sortProducts() {
    console.log('Sorting products'); // Debug log
    if (this.sortOrder === 'asc') {
      this.FilteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      this.sortOrder = 'desc';  // Toggle sort order
    } else {
      this.FilteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      this.sortOrder = 'asc';  // Toggle sort order
    }
    this.updatePaginatedProducts();
  }

  // Reset filters and sorting
  resetFilters() {
    this.searchTerm = '';
    this.selectedCategoryID = 0;
    this.sortOrder = 'asc';
    this.currentPage = 1;

    this.FilteredProducts = [...this.products]; // Reset filtered products to all products
    this.updatePaginatedProducts();
  }

  // Handle pagination
updatePaginatedProducts() {
  const start = (this.currentPage - 1) * this.itemsPerPage;
  const end = start + this.itemsPerPage;

  // تحديث المنتجات المعروضة حسب الصفحة الحالية
  this.paginatedProducts = this.FilteredProducts.slice(start, end);

  // حساب عدد الصفحات بناءً على عدد المنتجات
  this.totalPages = Math.ceil(this.FilteredProducts.length / this.itemsPerPage);
}

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedProducts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedProducts();
    }
  }

  onPageSizeChange() {
    this.currentPage = 1;  // Reset to first page when items per page changes
    this.updatePaginatedProducts();
  }

  trackByFn(index: number, item: iProduct) {
    return item.id;
  }

  // Handle product buying logic
  Buy(count: string, price: number) {
    const countNumber = parseInt(count, 10);
    if (!isNaN(countNumber) && countNumber > 0) {
      this.totalOrderPrice += countNumber * price;
      this.onTotalOrderPriceChanged.emit(this.totalOrderPrice);
    }
  }

  // Navigate to product details page
  Details(id: number) {
    this.router.navigate(['/products-details', id]);
  }

}
