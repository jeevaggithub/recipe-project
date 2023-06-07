import { Ingredients } from "src/app/shared/ingredients.model";

export class recipeModel {
  public name:string;
  public description:string;
  public imagePath:string;
  public ingredientsRef:Ingredients[];

  constructor(name:string,desc:string,imagepath:string,ingredient:Ingredients[]){
    this.name = name;
    this.description = desc;
    this.imagePath = imagepath;
    this.ingredientsRef=ingredient;
  }

}
