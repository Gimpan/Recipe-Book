import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService, private store: Store<fromApp.AppState>) {}

  storeRecipes() {
    const token = this.store.select('auth').pipe(
      switchMap((authState: fromAuth.State) => {
        return authState.token;
      }));
    return this.http.put('https://gimpan-116f7.firebaseio.com/recipes.json?auth=' + token , this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.store.select('auth').pipe(
      switchMap((authState: fromAuth.State) => {
        return authState.token;
      }));

    // this.http.get('https://gimpan-116f7.firebaseio.com/recipes.json?auth=' + token)
    // .pipe(
    //   map(
    //     (response: Response) => {
    //       const recipes: Recipe[] = response.json();
    //       for (const recipe of recipes) {
    //         if (!recipe['ingredients']) {
    //           console.log(recipe);
    //           recipe['ingredients'] = [];
    //         }
    //       }
    //       return recipes;
    //     }
    //   )
    // ).subscribe(
    //   (recipes: Recipe[]) => {
    //     this.recipeService.setRecipes(recipes);
    //   }
    // );
  }
}
