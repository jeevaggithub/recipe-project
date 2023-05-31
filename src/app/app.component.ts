import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'recipe-project';
  currentnav = 'recipe';

  constructor(){}

  ngOnInit(): void {

  }

  onNavigate(currentval:string){
    this.currentnav = currentval;
  }

}
