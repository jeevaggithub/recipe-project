

import { Ingredients, } from "src/app/shared/ingredients.model";



export class ShoppingListService{


  ingredients :Ingredients[]=[
    new Ingredients('Apple',5),
    new Ingredients('Tomato',10),
    new Ingredients('Onion',15),
  ];

  addIngredients(value:Ingredients){

    this.ingredients.push(value);
    // console.log(this.ingredients,'iugifa');

  }

  addIngedient(ingredient:Ingredients[]){
    this.ingredients.push(...ingredient);
    // console.log(ingredient,'tvytuygufyu');
    // console.log(this.ingredients,'this.ingredients');

  }

}
