import { Component, OnInit,Input ,OnChanges} from '@angular/core';

import { recipe } from '../recipe/recipe.component';
import { recipeModel } from '../recipe.model';
import {ShoppingListService } from '../../shoping-list/shopping-list.service'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit ,OnChanges {

  @Input() emittedSelectItem: any;

  @Input() recipeWasSelected:any;

 data : any;

  @Input() recipe:recipeModel;

  constructor(private shoppingListService:ShoppingListService,private recipeService:RecipeService) { }

  ngOnInit(): void {
    // console.log('iugbi7bih',this.recipeWasSelected);
    // this.recipeWasSelected = this.data;
    // console.log('data',this.data);
  }

  ngOnChanges(){
    // console.log('iugbi7bih',this.emittedSelectItem);

  }
  onAddShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredientsRef);
    // console.log('this.recipe.ingredientsRef sent to recipe service',this.recipe.ingredientsRef);

    // this.shoppingListService.addIngredients(...this.recipe.ingredientsRef);
  }

}
