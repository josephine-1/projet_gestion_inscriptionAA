import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { PageUserComponent } from './page-user/page-user.component';



import{ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { PageConnexionComponent } from './page-connexion/page-connexion.component';

import { AngularPaginatorModule } from 'angular-paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { TableauAdmComponent } from './tableau-adm/tableau-adm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { TableauAdmArchiveComponent } from './tableau-adm-archive/tableau-adm-archive.component';
import { ModifierComponent } from './modifier/modifier.component';





import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  imports: [BrowserModule, NgxPaginationModule,  Ng2SearchPipeModule, FormsModule ],
  declarations: [
    AppComponent,



    PageConnexionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

    NavbarComponent,
    TableauAdmComponent,
    TableauAdmArchiveComponent,
    ModifierComponent
  ],
  imports: [  
    ReactiveFormsModule,
    AngularPaginatorModule,
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule



    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],

  providers: [],

  bootstrap: [AppComponent],
 

})
export class AppModule { }

