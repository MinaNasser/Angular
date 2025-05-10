import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RatePipe } from '../pipes/rate.pipe';
import { Recipe } from '../types/recipe';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, RatePipe],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  item !: string;
  @Input() recipeItem !: Recipe;
  @Output() sendToParent = new EventEmitter<number>();

  // router = inject(Router);
  constructor(private router: Router,) { }

  handleDelete(id: number) {
    this.sendToParent.emit(id);
  }

  handleNavigate(id: number) {
    this.router.navigate(['/recipe-details', id])
  }
}

// SHARE FROM PARENT TO CHILD
//  PARENT.HTML => <app-child-selector [propertyName]="value"></app-child-selector>
//  CHILD.TS => @Input() propertyName : any;

// SHARE FROM CHILD TO PARENT
// CHILD.TS => @Output() instanceEventEmitter = new EventEmitter();
// CHILD.TS => this.instanceEventEmitter.emit(value)

// PARENT.HTML => <app-child-selector (instanceEventEmitter)="recievedFromChild($event)"></app-child-selector>
// PARENT.TS => recievedFromChild(value){}
