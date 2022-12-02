import { Component } from '@angular/core';
import list from '../modele/list.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  list!:Array<any>

  constructor(){}

  ngOnInit(): void {
    this.list = list
}
/* active(active_:string)
      {
        this.active_ = null,
        alert("hello");
      } */
}
