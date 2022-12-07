import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PageUserComponent } from './page-user/page-user.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { AngularPaginatorModule } from 'angular-paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';


import { TableauAdmComponent } from './tableau-adm/tableau-adm.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { TableauAdmArchiveComponent } from './tableau-adm-archive/tableau-adm-archive.component';
import { ModifierComponent } from './modifier/modifier.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations:
  [
    TableauAdmComponent,
    PageUserComponent,
    NavbarComponent,
    AppComponent,
    InscriptionComponent,
    ModifierComponent,
    PageConnexionComponent,
    PageUserComponent,
    TableauAdmArchiveComponent,

  ],
  imports: [

    Ng2SearchPipeModule,
   BrowserModule,
   ReactiveFormsModule,
    AngularPaginatorModule,

    NgxPaginationModule,

    AppRoutingModule,

    CommonModule,
    FormsModule,

    
  ],

  providers: [],

  bootstrap: [AppComponent],


})
export class AppModule { }

