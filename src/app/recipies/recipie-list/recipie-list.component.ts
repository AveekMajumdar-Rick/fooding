import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from "../recipe.model";
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  
  recipes: Recipe[] = [];
  
  constructor(private recipieService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipieService.getRecipes();
  }
  

}
