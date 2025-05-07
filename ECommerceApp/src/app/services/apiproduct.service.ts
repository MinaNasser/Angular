import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iProduct } from '../Models/iproduct';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class APIProductService {
  // http = inject(HttpClient);
  constructor(
    private httpClient: HttpClient
  ) { }
  // getProducts  from api
  GetAllProducts():Observable<iProduct[]>{
   return this.httpClient.get<iProduct[]>(`${environment.apiUrl}/products`)
  }

  GetProductById(id:number) : Observable<iProduct>{
    return this.httpClient.get<iProduct>(`${environment.apiUrl}/products/${id}`)
  }

  GetProductsByCategory(id:number):Observable<iProduct[]>{
    return this.httpClient.get<iProduct[]>(`${environment.apiUrl}/products?categoryId=${id}`)
  }
  // add product
  AddProduct(product:iProduct):Observable<iProduct>{
    return this.httpClient.post<iProduct>(`${environment.apiUrl}/products`,product)
  }
  // update product
  UpdateProduct(product:iProduct):Observable<iProduct>{
    return this.httpClient.put<iProduct>(`${environment.apiUrl}/products/${product.id}`,product)
  }
  // delete product
  DeleteProduct(id:number):Observable<iProduct>{
    return this.httpClient.delete<iProduct>(`${environment.apiUrl}/products/${id}`)
  }
  
}
