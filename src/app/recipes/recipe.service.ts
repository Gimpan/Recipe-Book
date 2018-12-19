import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Choco Chip Cookie', 'Yummie!', 'https://images-gmi-pmc.edge-generalmills.com/b9272720-c6bf-4288-92f7-43542067af7c.jpg'),
    new Recipe('Korean burger', 'Awesome!', 'https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg')
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice(); // use slice to get copy of object, instead of reference
  }
}
