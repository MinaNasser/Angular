import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsFromAPIService {

constructor(private http:HttpClient) { }

getAll():Observable<any>{
  return this.http.get("http://localhost:5094/api/product/index")
}

}
