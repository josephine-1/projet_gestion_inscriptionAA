import { Injectable } from '@angular/core';
import { Utilisateur } from './service/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  public seConnecter(userInfo: Utilisateur){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}