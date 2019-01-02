import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { RecipeService } from "../recipes/recipe.service";
@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    this.http.put('https://gimpan-116f7.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }
}
