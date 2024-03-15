import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {
  @Input() recipe! : Recipe;
  
  constructor(private recepieService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recepieService.recipeSelected.emit(this.recipe);
  }
}
