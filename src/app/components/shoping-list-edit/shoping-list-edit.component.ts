import { Component,ElementRef,EventEmitter,OnInit, Output, ViewChild } from "@angular/core";

import { Ingredients } from "src/app/shared/ingredients.model";

@Component({
  selector :'app-shoping-list-edit',
  templateUrl:'shoping-list-edit.component.html',
  styleUrls:['./shoping-list-edit.component.scss']
})
export class shopingListEditComponent {

  // @ViewChild('nameInput') nameInputRef:ElementRef;
  // @ViewChild('amountInput') amountInputRef:ElementRef;

  @Output() ingredientAdded = new EventEmitter <Ingredients>();

// ingredientData:Ingredients;

constructor(){}

onAdd(arg1:any,arg2:any){
  const ingName=arg1.value;
  const ingAmount=arg2.value;
  // const ingName=this.nameInputRef.nativeElement.value;
  // const ingAmount=this.amountInputRef.nativeElement.value;
  const newIngredient = new Ingredients(ingName,ingAmount);
  this.ingredientAdded.emit(newIngredient);
  // console.log(newIngredient);
  // console.log(ingName.value,ingAmount.value);
}

}
