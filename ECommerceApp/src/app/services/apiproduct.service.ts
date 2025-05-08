import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iProduct } from '../Models/iproduct';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { UserAuthService } from './userAuth.service';

@Injectable({
  providedIn: 'root'
})
export class APIProductService {

  constructor(private httpClient: HttpClient , private _usrAuth : UserAuthService) { }

  // Get all products
  GetAllProducts(): Observable<iProduct[]>  {
    return this.httpClient.get<iProduct[]>(`${environment.apiUrl}/products`,{
      headers: new HttpHeaders({
        "authorization":this._usrAuth.getToken(),
        // `Bearer ${localStorage.getItem("token")}`
      })
    })

  }

  // Get product by id
  GetProductById(id: number): Observable<iProduct> {
    return this.httpClient.get<iProduct>(`${environment.apiUrl}/products/${id}`);
  }

  // Get products by category
  GetProductsByCategory(id: number): Observable<iProduct[]> {
    let searchString = new HttpParams()
    searchString.append("categoryId",id.toString())
    searchString = searchString.append("limit",10)

    return this.httpClient.get<iProduct[]>(`${environment.apiUrl}/products`,
      {
        // params:new HttpParams().set("categoryId",id.toString())
        params:searchString
      }
    );
  }

  // Add new product
  AddProduct(product: iProduct): Observable<iProduct> {
    return this.httpClient.post<iProduct>(`${environment.apiUrl}/products`,
      JSON.stringify(product),
    );
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
