import { Component, OnInit } from '@angular/core';
/* import UserJson from '../page-user/user.json'; */
import { CrudService } from '../service/service.service';

/* interface USERS {
  id: Number;
  prenom: String;
  nom: String;
  email: String;
  telephone: string;
  date_d_inscription:string;
} */

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.scss']
})
export class PageUserComponent implements OnInit {

  p:number=1;
  searchText!:string;
/*   Users: USERS[] = UserJson; */
  Utilisateur: any = [];

  prenom!:any;
  nom!:any;
  matricule!:any
  etat:any = localStorage.getItem('token');

  constructor(  private crudService: CrudService){
   /*  console.log(this.Users); */

  }
  ngOnInit(): void {
    this.getAllUsers()
    this.prenom = localStorage.getItem('prenom');
    this.nom = localStorage.getItem('nom');
    this.matricule = localStorage.getItem('matricule');
    console.log(this.Utilisateur);

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
  }
}
