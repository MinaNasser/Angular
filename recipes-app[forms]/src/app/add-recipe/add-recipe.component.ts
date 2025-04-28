import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RecipesRequestService } from '../services/recipes-request.service';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  username : string = 'Ahmed';
  // recipeService =inject(RecipesRequestService);
  handleSubmitForm(form : NgForm){
    console.log(form)
    console.log(form.value)
    // this.recipeService.addRecipe(form.value).subscribe((response) => {
    //   console.log(response);
    // }
    // )


  }
}


// TS => import FormsModule 
// HTML => <form #formRef="ngForm" (ngSubmit)="handleSubmit(formRef)">
// HTML => <field name="fieldName" ngModel #fieldName="ngModel"></field>
// HTML => VALIDATIONS => fieldName.invalid && fieldName.touched => fieldName.hasError()