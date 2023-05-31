import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';

import { recipe } from '../recipe/recipe.component';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  @Output() recipedetail= new EventEmitter<recipe>();
  @Input() recipeWasSelected;

  selectedRecipe:recipe;
  constructor() { }

  ngOnInit(): void {
    this.selectedRecipefun(event);
    // console.log(this.selectedRecipe);
  }
  selectedRecipefun(event){
    this.selectedRecipe=event;
    console.log('event selected',this.selectedRecipe);
    this.recipedetail.emit(this.selectedRecipe);
  }

}
