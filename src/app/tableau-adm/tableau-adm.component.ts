import { Component, OnInit } from '@angular/core';
/* import list from '../modele/list.json'; */
import { CrudService } from './../service/service.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-tableau-adm',
  templateUrl: './tableau-adm.component.html',
  styleUrls: ['./tableau-adm.component.scss']
})
export class TableauAdmComponent implements OnInit {
  Utilisateur: any = [];
  list!:Array<any>
  pages: number = 1;
  searchText:any;
  constructor(private crudService: CrudService) {}
 
  ngOnInit(): void {
    this.crudService.GetUtilisateurs().subscribe((res) => {
      console.log(res);
      this.Utilisateur = res;
    });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteUtilisateur(id).subscribe((res) => {
        this.Utilisateur.splice(i, 1);
      });
    }
  }
}
