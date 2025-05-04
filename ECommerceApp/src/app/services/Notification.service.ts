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
      // '',
      'Product added to wishlist',
      'Product removed from wishlist',
      'Product added to compare',
      'Product removed from compare',
      'Product added to compare',
      'Product removed from compare',
      'Product added to compare',
      'Product removed from compare',
      'Product added to compare',
      'sheared Succcessfully',
    ];
  }

  getNotification(): Observable<string> {
    return new Observable(observer => {
      // observer.next(this.notification);
      // observer.complete();
      // observer.error('Error');

      let content = 0;
     let timer = setInterval(() => {
      console.log(content);
        observer.next(this.notification[content++]);
        if (content == this.notification.length) {
          observer.complete();
          // content = 0;

        }
        if(this.notification[content] == '') {
          observer.error('Error occured in notification');
        }
        // observer.complete();
      }, 1000);


      return {
        unsubscribe() {
          console.log('Unsubscribed');
          clearInterval(timer);
        }
      }
    })
  }

}
