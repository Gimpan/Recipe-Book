import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from '../store/recipe.actions';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router,
    private store: Store<fromRecipe.FeatureState>
    // private store: Store<{shoppingList: {ingredients: Ingredient[]}}>  Takes javascript obj if not using the AppState interface
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeState = this.store.select('recipes');
        console.log('ID:', this.id);
        console.log('State:', this.recipeState);
      }
    );
  }

  onAddToShoppingList() {
    this.store.select('recipes').pipe(take(1)).subscribe(
      (recipeState: fromRecipe.State) => {
        this.store.dispatch(
          new ShoppingListActions.AddIngredients(recipeState.recipes[this.id].ingredients)
        );
    });
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
      this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
      this.router.navigate(['/recipes']);
  }
}
