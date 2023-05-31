import { Component, OnInit,Input ,OnChanges} from '@angular/core';

import { recipe } from '../recipe/recipe.component';
import { recipeModel } from '../recipe.model';

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

  constructor() { }

  ngOnInit(): void {
    // console.log('iugbi7bih',this.recipeWasSelected);
    // this.recipeWasSelected = this.data;
    // console.log('data',this.data);
  }

  ngOnChanges(){
    // console.log('iugbi7bih',this.emittedSelectItem);

  }

}
