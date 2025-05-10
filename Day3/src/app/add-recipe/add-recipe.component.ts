import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  recipeName: string = '';
  recipeDescription: string = '';

  HandelSubmit( form :NgForm) {
    console.log(form);
    console.log(form.value);
  }

}
