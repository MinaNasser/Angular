import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iProduct } from '../Models/iproduct';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class APIProductService {

  constructor(private httpClient: HttpClient) { }

  // Get all products
  GetAllProducts(): Observable<iProduct[]> {
    return this.httpClient.get<iProduct[]>(`${environment.apiUrl}/products`);
  }

  // Get product by id
  GetProductById(id: number): Observable<iProduct> {
    return this.httpClient.get<iProduct>(`${environment.apiUrl}/products/${id}`);
  }

  // Get products by category
  GetProductsByCategory(id: number): Observable<iProduct[]> {
    return this.httpClient.get<iProduct[]>(`${environment.apiUrl}/products?categoryId=${id}`);
  }

  // Add new product
  AddProduct(product: iProduct): Observable<iProduct> {
    return this.httpClient.post<iProduct>(`${environment.apiUrl}/products`, product);
  }

  // Update product
  UpdateProduct(product: iProduct): Observable<iProduct> {
    return this.httpClient.put<iProduct>(`${environment.apiUrl}/products/${product.id}`, product);
  }

  // Delete product
  DeleteProduct(id: number): Observable<iProduct> {
    return this.httpClient.delete<iProduct>(`${environment.apiUrl}/products/${id}`);
  }

  // Extract IDs from product list
  mapProductsToIds(products: iProduct[]): number[] {
    return products.map(product => product.id);
  }
}
