import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] =  [
    new Ingredient('Salt', 2),
    new Ingredient('Sugar', 20)
  ];
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); // spread operator to spread array into a list of objects for one push. Instead of looping
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
