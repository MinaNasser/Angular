import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/Iproduct';
import { ProductDetails } from '../Models/ProductDetails';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5094/api/product'; // ضع الرابط الصحيح للـ API

  constructor(private http: HttpClient) {}

  // جلب جميع المنتجات
  GetAllProducts(searchText: string = "", price: number = 0, categoryId: number = 0, vendorId: string = "", pageNumber: number = 1, pageSize: number = 5): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}/index?searchText=${searchText}&price=${price}&categoryId=${categoryId}&vendorId=${vendorId}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  // جلب منتج بواسطة الـ ID
  GetProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/Details/${id}`);
  }

  // إضافة منتج
  AddProduct(product: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/add/post`, product);
  }

  // تصفية المنتجات حسب الاسم
  FilterProductsByName(name: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}/search?name=${name}`);
  }

  FilterProductByCategory(catId: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}/index?categoryId=${catId}`);
  }
}
