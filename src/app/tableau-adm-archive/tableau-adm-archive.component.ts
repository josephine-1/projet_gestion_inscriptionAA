import { Component, OnInit } from '@angular/core';
import list from '../modele/list.json';

@Component({
  selector: 'app-tableau-adm-archive',
  templateUrl: './tableau-adm-archive.component.html',
  styleUrls: ['./tableau-adm-archive.component.scss']
})
export class TableauAdmArchiveComponent implements OnInit {
  list!:Array<any>
  pages: number = 1;
  searchText:any;
  constructor(){}

  ngOnInit(): void {
    this.list = list
  }
}

