import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromAuth from '../../auth/store/auth.reducers';
import { Observable } from 'rxjs';
import * as authActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';
import { Animations } from 'src/app/shared/anime';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    Animations.animeTrigger
]
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;
  @Output() featureSelected = new EventEmitter<string>();
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  OnSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onSaveData() {
    this.store.dispatch(new RecipeActions.StoreRecipe());
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new authActions.Logout());
  }
}
