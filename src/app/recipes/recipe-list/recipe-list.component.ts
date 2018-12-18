import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Choco Chip Cookie', 'Yummie!', 'https://images-gmi-pmc.edge-generalmills.com/b9272720-c6bf-4288-92f7-43542067af7c.jpg'),
    new Recipe('Korean burger', 'Awesome!', 'https://www.chatelaine.com/wp-content/uploads/2017/05/Bibimbap-homemade-burgers.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit() {
  }

}
