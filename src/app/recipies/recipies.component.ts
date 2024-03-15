import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

   selectedEvent! : Recipe;
  constructor(private recipieService: RecipeService) { }

  ngOnInit(): void {
    this.recipieService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedEvent = recipe;
      }
    );
  }

}
