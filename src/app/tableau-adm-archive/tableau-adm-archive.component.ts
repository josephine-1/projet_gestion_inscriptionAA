import { Component, OnInit } from '@angular/core';
/* import list from '../modele/list.json'; */
import { CrudService } from '../service/service.service';

@Component({
  selector: 'app-tableau-adm-archive',
  templateUrl: './tableau-adm-archive.component.html',
  styleUrls: ['./tableau-adm-archive.component.scss']
})
export class TableauAdmArchiveComponent implements OnInit {
  Utilisateur: any = [];

  pages: number = 1;
  searchText:any;
  constructor(private crudService: CrudService){}

  ngOnInit(): void {
    this.crudService.GetUtilisateurs().subscribe((res) => {
      console.log(res);
      this.Utilisateur = res;
    });
  }
}

