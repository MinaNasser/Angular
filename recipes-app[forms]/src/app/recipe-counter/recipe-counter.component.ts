import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-recipe-counter',
  templateUrl: './recipe-counter.component.html',
  styleUrl: './recipe-counter.component.css'
})
export class RecipeCounterComponent {
  count: number = 0;
  counterService = inject(CounterService)
  ngOnInit() {
    this.counterService.getCount().subscribe((count) => {
      this.count = count;
    });
  }

  increment() {
    this.count++;
    this.counterService.updateCount(this.count);
  }
  decrement() {
    this.count--;
    this.counterService.updateCount(this.count);
  }
}
