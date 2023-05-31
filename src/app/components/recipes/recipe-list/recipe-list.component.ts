import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

import { recipeModel } from '../recipe.model';
import { recipe } from '../recipe/recipe.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<recipe>();

  recipes:recipeModel[] = [
    new recipeModel('this is a sample1 name ','this is a sample1 description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    new recipeModel('this is a sample2 name ','this is a sample2 description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    new recipeModel('this is a sample3 name ','this is a sample3 description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    new recipeModel('this is a sample4 name ','this is a sample4 description','https://thumbs.dreamstime.com/b/recipes-tablet-heading-table-surrounded-fresh-food-ingredients-46173275.jpg'),
    // new recipeModel('this is a sample3 name ','this is a sample3 description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    // new recipeModel('this is a sample4 name ','this is a sample4 description','https://thumbs.dreamstime.com/b/recipes-tablet-heading-table-surrounded-fresh-food-ingredients-46173275.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
    // console.log('recipeModel',this.recipes);
    // console.log('recipeModel',this.recipes[0].name);
  }
  onRecipeselected(recipeEl:recipe){
    this.recipeWasSelected.emit(recipeEl);
  }

}
