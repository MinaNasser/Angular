import { APIProductService } from './../services/apiproduct.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements CanActivate {

  constructor(private router: Router, private apiProductService: APIProductService) { }

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const id = Number(route.paramMap.get('id'));
    if (isNaN(id) || id <= 0) {
      console.warn('Invalid product ID: ', id);
      this.router.navigate(['/not-found']);
      return false;
    }

    return new Promise((resolve) => {
      this.apiProductService.GetAllProducts().subscribe(products => {
        const maxId = Math.max(...products.map(p => p.id));
        if (id > maxId) {
          console.warn(`Product ID ${id} exceeds max allowed: ${maxId}`);
          this.router.navigate(['/not-found']);  // حوله لصفحة Not Found مثلا
          resolve(false);
        } else {
          resolve(true);  // كل حاجة تمام
        }
      }, error => {
        console.error('Error fetching products:', error);
        this.router.navigate(['/not-found']);
        resolve(false);
      });
    });
  }
}
