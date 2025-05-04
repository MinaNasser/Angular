import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notification: string[];
  constructor() {
    this.notification = [
      'Product added to cart',
      'Product removed from cart',
      'Product updated',
      'Product deleted',
      'Product added to wishlist',
      'Product removed from wishlist',
      'Product added to compare',
      'Product removed from compare',
      'Product added to compare',
      'Product removed from compare',
      'Product added to compare',
      'Product removed from compare',
      'Product added to compare',
      '',
      'sheared Succcessfully',
    ];
  }

  getNotification() {
    let myObservable = new Observable(observer => {
      // observer.next(this.notification);
      // observer.complete();
      // observer.error('Error');

      let content = 0;
      setInterval(() => {
        observer.next(this.notification[content++]);
        if (content >= this.notification.length) {
          observer.complete();
        }
        if(this.notification[content] == '') {
          observer.error('Error occured in notification');
        }
        // observer.complete();
      }, 2000);
    })
  }

}
