import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  Name : string = 'Ahmed';
}
