import { Component,} from "@angular/core";

import { Ingredients } from "src/app/shared/ingredients.model";
import { ShoppingListService } from "../shoping-list/shopping-list.service";

@Component({
  selector :'app-shoping-list-edit',
  templateUrl:'shoping-list-edit.component.html',
  styleUrls:['./shoping-list-edit.component.scss']
})
export class shopingListEditComponent {

  // @ViewChild('nameInput') nameInputRef:ElementRef;
  // @ViewChild('amountInput') amountInputRef:ElementRef;


// ingredientData:Ingredients;

constructor(private slService:ShoppingListService){}

onAdd(arg1:any,arg2:any){
  const ingName=arg1.value;
  const ingAmount=arg2.value;
  // const ingName=this.nameInputRef.nativeElement.value;
  // const ingAmount=this.amountInputRef.nativeElement.value;
  const newIngredient = new Ingredients(ingName,ingAmount);
  this.slService.addIngredients(newIngredient);
  // console.log(newIngredient);
  // console.log(ingName.value,ingAmount.value);
}

}
