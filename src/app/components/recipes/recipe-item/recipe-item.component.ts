import { Component, Input, OnInit,EventEmitter,Output } from '@angular/core';

import { recipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe:recipeModel;

 @Output() emittedSelectItem = new EventEmitter<void>();

  recipes:recipeModel[]=[
    new recipeModel('this is a sample1 name ','this is a sample1 description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    new recipeModel('this is a sample2 name ','this is a sample2 description','https://thumbs.dreamstime.com/b/recipes-tablet-heading-table-surrounded-fresh-food-ingredients-46173275.jpg'),
    new recipeModel('this is a sample3 name ','this is a sample3 description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    new recipeModel('this is a sample4 name ','this is a sample4 description','https://thumbs.dreamstime.com/b/recipes-tablet-heading-table-surrounded-fresh-food-ingredients-46173275.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onListClick(){
    // console.log('clicked from recipe list',e);
    this.emittedSelectItem.emit();
    // console.log('list',this.emittedSelectItem.emit(e));
  }

}
