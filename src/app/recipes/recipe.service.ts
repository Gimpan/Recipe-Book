import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ // Services don't need to be Injectable.
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Choco Chip Cookie', 'Yummie!', 'https://images-gmi-pmc.edge-generalmills.com/b9272720-c6bf-4288-92f7-43542067af7c.jpg',
    [new Ingredient('Salt', 1), new Ingredient('Sugar', 10)]),
    new Recipe('Korean burger', 'Awesome!', 'https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg',
    [new Ingredient('Ground beef', 1), new Ingredient('Bun', 1)])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice(); // use slice to get copy of object, instead of reference
  }

  getRecipe( index: number) {
    return this.recipes[index]; // use slice to get copy of object, instead of reference
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe( index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
