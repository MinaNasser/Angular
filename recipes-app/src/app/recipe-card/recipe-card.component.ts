import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  @Input() recipeItem : any;
  @Output() sendToParent = new EventEmitter<number>();
  @Output() AlertfromChild = new EventEmitter<string>();

  @Output() display = new EventEmitter<number>();

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
  handleAlert(){
    this.AlertfromChild.emit("Hello from Child");
  }
  handleDisblay(int : number){
    console.log(int);
    this.display.emit(int);
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