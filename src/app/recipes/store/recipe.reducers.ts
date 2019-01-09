import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as recipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducer';

export interface FeatureState extends fromApp.AppState { // when lazy loaded, need to hook up with the Appstate
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe('Choco Chip Cookie', 'Yummie!', 'https://images-gmi-pmc.edge-generalmills.com/b9272720-c6bf-4288-92f7-43542067af7c.jpg',
    [new Ingredient('Salt', 1), new Ingredient('Sugar', 10)]),
    new Recipe('Korean burger', 'Awesome!', 'https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg',
    [new Ingredient('Ground beef', 1), new Ingredient('Bun', 1)])
  ]
};

export function recipeReducer(state = initialState, action: recipeActions.RecipeActions) {
  switch (action.type) {
    case(recipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case(recipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case(recipeActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    case(recipeActions.UPDATE_RECIPE):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe, // give this object properties and its values from recipe object
        ...action.payload.updatedRecipe // add new properties and its values. Or/and replace values on existing properties.
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    default:
      return state;
  }
}
