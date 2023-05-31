import { Component,OnInit ,EventEmitter,Output} from "@angular/core";

@Component({
  selector:'app-header1',
  templateUrl:'header1.component.html',
  styleUrls:['./header1.component.scss']
})
export class header1  implements OnInit{

@Output()  navValue= new EventEmitter<string>();

  collapsed = true;

  constructor(){}

  ngOnInit(): void {}

  onclick(arg:string){
    if (arg) {
      this.navValue.emit(arg);
    }
  }
}
