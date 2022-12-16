import { Component, OnInit } from '@angular/core';
import UserJson from '../page-user/user.json';

interface USERS {
  id: Number;
  prenom: String;
  nom: String;
  email: String;
  telephone: string;
  date_d_inscription:string;
}

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.scss']
})
export class PageUserComponent implements OnInit {

  p:number=1;
  searchText!:string;
  Users: USERS[] = UserJson;

  prenom!:any;
  nom!:any;
  matricule!:any
  avatar:any
  etat:any = localStorage.getItem('token');

  constructor(){
    console.log(this.Users);
  }
  ngOnInit(): void {
    this.prenom = localStorage.getItem('prenom');
    this.nom = localStorage.getItem('nom');
    this.matricule = localStorage.getItem('matricule');
    this.avatar = localStorage.getItem('avatar');
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
