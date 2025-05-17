
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-test-ngrx',
  imports: [AsyncPipe],
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
    // this.counter.subscribe((data) => {
    //   this.count = data;
    //   console.log(data);
    // });
  }
}
