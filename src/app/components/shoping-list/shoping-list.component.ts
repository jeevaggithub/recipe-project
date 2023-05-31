import { Component,OnInit } from "@angular/core";
import { Ingredients } from "src/app/shared/ingredients.model";

@Component({
  selector:'app-shoping-list',
  templateUrl:'shoping-list.component.html',
  styleUrls:['./shoping-list.component.scss']
})
export class shopingListComponent implements OnInit {

  ingredients :Ingredients[]=[
    new Ingredients('Apple',5),
    new Ingredients('Tomato',10),
    new Ingredients('Onion',15),
  ];

  constructor(){}

  ngOnInit(): void {
    // console.log('ingredients',this.ingredients);
  }
  newIngredient(ingredient:Ingredients){
    // console.log('newIngedient',ingredient);
    this.ingredients.push(ingredient);
}
}
