import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CounterService {
 private count  =new BehaviorSubject<number>(0);
  constructor() { }


  getCount() {
    return this.count.asObservable();
  }
  updateCount(newCount: number) {
    // this.count = 10 not Acceptable
    this.count.next(newCount);

  }
  

}
