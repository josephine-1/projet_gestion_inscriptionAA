import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/service.service';


@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.scss']
})
export class PageUserComponent implements OnInit {

  p:number=1;
  searchText!:string;
  Utilisateur: any = [];
  prenom!:any;
  nom!:any;
  matricule!:any
  avatar:any
  etat:any = localStorage.getItem('token');

  constructor( private crudService: CrudService){

  }
  ngOnInit(): void {
    this.getAllUsers();
    this.prenom = localStorage.getItem('prenom');
    this.nom = localStorage.getItem('nom');
    this.matricule = localStorage.getItem('matricule');
    this.avatar = localStorage.getItem('avatar');
  }

  getAllUsers() {
    this.crudService.GetUtilisateurs().subscribe((res) => {
      console.log(res);
      res = res.filter((user:any) => user.etat == true && user._id != localStorage.getItem('id')); // filtrer les actives et les archives
      this.Utilisateur = res;

    });
  }
  deconnexion()
  {
    // Effacer tous les éléments
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('prenom');
    localStorage.removeItem('nom');
    localStorage.removeItem('matricule');
    localStorage.removeItem('email');
  }
}
