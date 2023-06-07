import { Component,OnInit } from "@angular/core";

import { Ingredients } from "src/app/shared/ingredients.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector:'app-shoping-list',
  templateUrl:'shoping-list.component.html',
  styleUrls:['./shoping-list.component.scss'],

})
export class shopingListComponent implements OnInit {

  ingredients;

  constructor(private shoppingListServce:ShoppingListService){}

  ngOnInit(): void {
    // console.log('ingredients',this.ingredients);
    this.ingredients=this.shoppingListServce.ingredients;
  }
  newIngredient(ingredient:Ingredients){
    // console.log('newIngedient',ingredient);
    this.shoppingListServce.addIngredients(ingredient);
}
}
