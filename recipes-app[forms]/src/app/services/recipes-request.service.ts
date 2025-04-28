import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesRequestService {
  http = inject(HttpClient);
  constructor() { }


  getRecipes():Observable<any> {
    return this.http.get('https://dummyjson.com/recipes',
      {
        params: {
          limit: '10',
          skip: '0',
        },
        headers: {  
          // 'Content-Type': 'application/json',
          // 'Authorization':ACCEC_TOKEN
        }
      }


    );
  }
  // Observable is a stream of data that can be subscribed to
  // and will emit values over time. It is a core part of the RxJS library,
  // which is used extensively in Angular for handling asynchronous operations.
  // The Observable class is used to create observables, which can be
  // subscribed to using the subscribe() method. When an observable is subscribed to,
  // it will start emitting values, and the subscriber will receive those values
  // as they are emitted. Observables can also be used to handle errors and
  // completion events, making them a powerful tool for managing asynchronous operations
  // in Angular applications.
  getRecipeById(id: string): Observable<any> {
    
    return this.http.get(`https://dummyjson.com/recipes/${id}`);
  }
  addRecipe(recipe: any) {
    return this.http.post('https://dummyjson.com/recipes/add', recipe);
  }
}
