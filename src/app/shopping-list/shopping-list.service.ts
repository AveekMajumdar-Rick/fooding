import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  onAddIngredient = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('palak', 1),
    new Ingredient('panner', 250),
    new Ingredient('mustard oil', 1),
    new Ingredient('methi', 8)    
  ];
  
  getIngredients(){
    return this.ingredients.slice();  //slice() -> getting copy of array elements
  }

  addIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.onAddIngredient.emit(this.ingredients.slice());
  }

  addIngredientsFromRecipe(indgredient:Ingredient[]){
    this.ingredients.push(...indgredient);
    this.onAddIngredient.emit(this.ingredients.slice());
  }

  deleteIngredientsFromRecipe(indgredient:Ingredient){
    this.ingredients.pop();
    this.onAddIngredient.emit(this.ingredients.slice());
  }

  constructor() { }
}
