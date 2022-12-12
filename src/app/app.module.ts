import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PageUserComponent } from './page-user/page-user.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { AngularPaginatorModule } from 'angular-paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TableauAdmComponent } from './tableau-adm/tableau-adm.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { TableauAdmArchiveComponent } from './tableau-adm-archive/tableau-adm-archive.component';
import { ModifierComponent } from './modifier/modifier.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SwitchComponent } from './switch/switch.component';



@NgModule({
  declarations:
  [

    NavbarComponent,
    AppComponent,
    InscriptionComponent,
    ModifierComponent,
    PageConnexionComponent,
    PageUserComponent,
    TableauAdmComponent,
    TableauAdmArchiveComponent,
    SwitchComponent
  ],
  imports: [

    Ng2SearchPipeModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    AngularPaginatorModule,
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [],

  bootstrap: [AppComponent],


})
export class AppModule { }

