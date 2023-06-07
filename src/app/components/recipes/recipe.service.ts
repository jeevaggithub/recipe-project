import { Injectable } from "@angular/core";

import { Ingredients } from "src/app/shared/ingredients.model";
import { recipeModel } from "./recipe.model";
import { ShoppingListService } from "../shoping-list/shopping-list.service";


@Injectable()
export class RecipeService {

    recipes:recipeModel[] = [
      new recipeModel('this is a sample1 name ','this is a sample1 description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',[
        new Ingredients('Bread',2),
        new Ingredients('Tomato',3)
      ]),
      new recipeModel('this is a sample2 name ','this is a sample2 description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',[
        new Ingredients('Noodles',1),
        new Ingredients('Eggs',4)
      ]),
      new recipeModel('this is a sample3 name ','this is a sample3 description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',[
        new Ingredients('Rice',2),
        new Ingredients('Chicken',1)
      ]),
      new recipeModel('this is a sample4 name ','this is a sample4 description','https://thumbs.dreamstime.com/b/recipes-tablet-heading-table-surrounded-fresh-food-ingredients-46173275.jpg',[
        new Ingredients('Maida',3),
        new Ingredients('Onion',2)
      ]),
      // new recipeModel('this is a sample3 name ','this is a sample3 description','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
      // new recipeModel('this is a sample4 name ','this is a sample4 description','https://thumbs.dreamstime.com/b/recipes-tablet-heading-table-surrounded-fresh-food-ingredients-46173275.jpg'),
    ];

    constructor(private slService:ShoppingListService){}

    getRecipeList(){
      let recipeList = this.recipes;
      return recipeList;
    }
    addIngredientsToShoppingList(ingredients:Ingredients[]){
      this.slService.addIngedient(ingredients);
      // console.log('sent to slservice from recipe service ',ingredients);

    }
}
