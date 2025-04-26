import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  @Input() recipeItem : any;
  @Output() sendToParent = new EventEmitter<number>();

  constructor(){
    console.log("CONSTR.")
  } 

  ngOnChanges(){
    console.log("ON CHANGES", this.recipeItem);
  } 

  ngOnInit(){
    console.log("ON INIT");
  }

  ngOnDestroy(){
    console.log("ON DESTROY")
  }

  handleDelete(id: number){
   console.log(id)
   this.sendToParent.emit(id);
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