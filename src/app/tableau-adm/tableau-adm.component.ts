import { Component, OnInit } from '@angular/core';
import list from '../modele/list.json';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-tableau-adm',
  templateUrl: './tableau-adm.component.html',
  styleUrls: ['./tableau-adm.component.scss']
})
export class TableauAdmComponent implements OnInit {
  list!:Array<any>
  pages: number = 1;
  searchText:any;
  constructor(){}

  ngOnInit(): void {
    this.list = list
  }
}
