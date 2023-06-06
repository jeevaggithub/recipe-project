import{ EventEmitter, Output } from '@angular/core';

import { Ingredients, } from "src/app/shared/ingredients.model";



export class ShoppingListService{

  ingredients :Ingredients[]=[
    new Ingredients('Apple',5),
    new Ingredients('Tomato',10),
    new Ingredients('Onion',15),
  ];

  addIngredients(value:Ingredients){

    this.ingredients.push(value);
    console.log(this.ingredients,'iugifa');

  }

}
