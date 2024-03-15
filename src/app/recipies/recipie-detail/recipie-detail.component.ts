import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onIngredientsAddToShoppingList(){
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
