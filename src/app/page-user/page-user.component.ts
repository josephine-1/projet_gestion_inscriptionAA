import { Component } from '@angular/core';
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
export class PageUserComponent {
 
  p:number=1;
  searchText!:string;
  Users: USERS[] = UserJson;
  constructor(){
    console.log(this.Users);
  }
}
