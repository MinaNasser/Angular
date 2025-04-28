import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesRequestService } from '../services/recipes-request.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  // activatedRoute = inject(ActivatedRoute);

  // ngOnInit(){
  //   const id = this.activatedRoute.snapshot.params['id']
  //   console.log(this.activatedRoute.snapshot.params['id']);
  // }

  @Input() id : string = '';
  constructor(private recipeServe : RecipesRequestService) {}
    // this.id = this.activatedRoute.snapshot.params['id'];}

  ngOnInit(){
    // const id = this.activatedRoute.snapshot.params['id']
    // console.log(this.activatedRoute.snapshot.params['id']);
    this.recipeServe.getRecipeById(this.id).subscribe(
      (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
    
  
  );
  }
}


// READ PARAMS URL 
// WAY 1 | ACTIVATED ROUTE 
// COMPONENT.ts -> inject(ActivatedRoute) => this.activatedRoute.snapshot.params['paramName'];

// WAY 2 | withComponentInputBinding
// app.config => provideRouter([ , withComponentInputBinding()]);
// COMPONENT.ts -> @Input() paramName : any;