import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-ngrx',
  imports: [],
  templateUrl: './test-ngrx.component.html',
  styleUrl: './test-ngrx.component.css'
})
export class TestNgrxComponent {
  /**
   *
   */
  counter : Observable<number>;
  count!:number ;
  constructor(private store: Store<{counter : number}>) {
    this.counter = this.store.select('counter');
    this.counter.subscribe(data => {
      // console.log(data);
      this.count = data;
    });
  }
}
