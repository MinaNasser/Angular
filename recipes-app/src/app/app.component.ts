import { Component } from '@angular/core';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { HeaderComponent } from "./header/header.component";


@Component({
  selector: 'app-root',
  imports: [RecipesListComponent, AddRecipeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipes-app';
}
