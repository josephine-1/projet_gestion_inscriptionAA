import { Component, OnInit } from '@angular/core';
/* import list from '../modele/list.json'; */
import { CrudService } from './../service/service.service';


@Component({
  selector: 'app-tableau-adm',
  templateUrl: './tableau-adm.component.html',
  styleUrls: ['./tableau-adm.component.scss']
})
export class TableauAdmComponent implements OnInit {
  Utilisateur: any = [];
  pages: number = 1;
  searchText:any;
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.GetUtilisateurs().subscribe((res) => {
      console.log(res);
      this.Utilisateur = res;
    });
  }

  delete(id: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
        this.crudService.deleteUtilisateur(id).subscribe((res) => {
      });
    }
  }
}
