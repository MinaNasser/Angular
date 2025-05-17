import { iCategory } from './../Models/icategory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class APICategoryService {

  constructor(
    private httpClient:HttpClient
  ) { }

  
  // get all categories
  GetAllCategories():Observable<iCategory[]>{

    return this.httpClient.get<iCategory[]>(`${environment.apiUrl}/categories`)
  }
  // get category by id
  GetCategoryById(id:number):Observable<iCategory>{
    return this.httpClient.get<iCategory>(`${environment.apiUrl}/categories/${id}`)
  }
  // add category
  AddCategory(category:iCategory):Observable<iCategory>{
    return this.httpClient.post<iCategory>(`${environment.apiUrl}/categories`,category)
  }
  // update category
  UpdateCategory(category:iCategory):Observable<iCategory>{
    return this.httpClient.put<iCategory>(`${environment.apiUrl}/categories/${category.id}`,category)
  }
  // delete category
  DeleteCategory(id:number):Observable<iCategory>{
    return this.httpClient.delete<iCategory>(`${environment.apiUrl}/categories/${id}`)
  }
  
}
