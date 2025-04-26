import { Component } from '@angular/core';
import { RecipesListComponent } from "./recipes-list/recipes-list.component";

@Component({
  selector: 'app-root',
  imports: [RecipesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipes-app';
}
