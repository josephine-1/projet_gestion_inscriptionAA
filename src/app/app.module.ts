import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PageUserComponent } from './page-user/page-user.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { AngularPaginatorModule } from 'angular-paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmBoxEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { TableauAdmComponent } from './tableau-adm/tableau-adm.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { TableauAdmArchiveComponent } from './tableau-adm-archive/tableau-adm-archive.component';
import { ModifierComponent } from './modifier/modifier.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SwitchComponent } from './switch/switch.component';

import {
  ConfirmBoxConfigModule,
  DialogConfigModule,
  NgxAwesomePopupModule,
  ToastNotificationConfigModule,
  
} from '@costlydeveloper/ngx-awesome-popup';




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
    NgxAwesomePopupModule.forRoot({
      colorList: {
        success: '#3caea3', // optional
        info: '#2f8ee5', // optional
        warning: '#ffc107', // optional
        danger: '#e46464', // optional
        customOne: '#3ebb1a', // optional
        customTwo: '#bd47fa', // optional (up to custom five)
      },
    }),
    ConfirmBoxConfigModule.forRoot(),

    DialogConfigModule.forRoot(), // optional
    ToastNotificationConfigModule.forRoot(), // optional
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

