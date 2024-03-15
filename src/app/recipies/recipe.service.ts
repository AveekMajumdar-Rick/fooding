import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Veg Recipe', 'Palak paneer', 'assets/image/Palak-paneer.jpeg', 
    [
      new Ingredient('onion', 2),
      new Ingredient('Paneer', 200),
      new Ingredient('garam masala', 1),
      new Ingredient('cardamon', 2),
      new Ingredient('cloves', 2)
    ]),
    new Recipe('Non-Veg Recipe', 'Kadai chicken', 'assets/image/kadai-chicken.jpg',
    [
      new Ingredient('chicken', 1),
      new Ingredient('garam masala', 1),
      new Ingredient('kadai masala', 1),
      new Ingredient('curd', 2),
      new Ingredient('corriender', 5)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]){
    this.shoppingListService.addIngredientsFromRecipe(ingredient);
  }

  constructor(private shoppingListService: ShoppingListService) { }
}
