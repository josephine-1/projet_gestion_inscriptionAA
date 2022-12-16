import { Component } from '@angular/core';
import list from '../modele/list.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  list!:Array<any>;
  prenom!:any;
  nom!:any;
  matricule!:any
  avatar!:any;
  etat:any = localStorage.getItem('token');
  constructor(){}

  ngOnInit(): void {
    this.list = list
    this.prenom = localStorage.getItem('prenom');
    this.nom = localStorage.getItem('nom');
    this.matricule = localStorage.getItem('matricule');
    this.avatar = localStorage.getItem('avatar');
}
/* active(active_:string)
      {
        this.active_ = null,
        alert("hello");
      } */
    deconnexion()
    {
      // Effacer tous les éléments
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('prenom');
      localStorage.removeItem('nom');
      localStorage.removeItem('matricule');
      localStorage.removeItem('avatar');
      localStorage.removeItem('email');
    }
}
