import { Injectable } from '@angular/core';
import { Utilisateur } from './Utilisateur';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Add
  AddUtilisateur(data: Utilisateur): Observable<any> {
    let API_URL = `${this.REST_API}/add-utilisateur`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  // Get all objects
  GetUtilisateurs():Observable<any> {
    return this.httpClient.get(`${this.REST_API}`);
  }
  // Get single object
  GetUtilisateur(id: any): Observable<any> {
    console.log(id);
    let API_URL = `${this.REST_API}/read-utilisateur/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Update
  updateUtilisateur(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/modifier/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete
  deleteUtilisateur(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-utilisteur/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

    //CONNEXION
    login(data: Utilisateur): Observable<any> {
      let API_URL = `${this.REST_API}/connexion`;
      return this.httpClient
        .post(API_URL, data)
        .pipe(catchError(this.handleError));
    }
  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }



}
