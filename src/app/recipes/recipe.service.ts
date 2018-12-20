import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ // Services don't need to be Injectable.
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Choco Chip Cookie', 'Yummie!', 'https://images-gmi-pmc.edge-generalmills.com/b9272720-c6bf-4288-92f7-43542067af7c.jpg',
    [new Ingredient('Salt', 1), new Ingredient('Sugar', 10)]),
    new Recipe('Korean burger', 'Awesome!', 'https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg',
    [new Ingredient('Ground beef', 1), new Ingredient('Bun', 1)])
  ];
  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // use slice to get copy of object, instead of reference
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
