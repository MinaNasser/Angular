import { Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { SettingsComponent } from './settings/settings.component';
import { RecipeCounterComponent } from './recipe-counter/recipe-counter.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { AddRecipeReactiveComponent } from './add-recipe-reactive/add-recipe-reactive.component';

export const routes: Routes = [
    {
        path: '',
        component: RecipesListComponent,
        title: 'Recipes List'
    },
    {
        path: 'recipe-details/:id',
        component: RecipeDetailsComponent,
        title: 'Recipe Details'
    },
    {
        path: 'add-recipe-template',
        component: AddRecipeComponent,
        title: 'Add Recipe'
    },
    {
        path: 'recipe-counter',
        component: RecipeCounterComponent,
        title: 'Recipe Counter'
    },
    {
        path: 'settings',
        component: SettingsComponent,
        title: 'Settings',
        canActivate: [authGuard]
    },
    {
        path: 'add-recipe-reactive',
        component: AddRecipeReactiveComponent,
        title: 'Recipe recipe reactive'
    },
    {
        path:"**",
        component: NotFoundComponent,
        title: 'Not Found'
    }
];


// DEFINE ROUES => { path: "", component: COMPONENT_CLASS_NAME }
// NAVIGATE HTML => <a routerLink="/path">Link</a>
// NAVIGATE TS => inject(Router) => this.router.navigate(['path']);