import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';

import { PageUserComponent } from './page-user/page-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { FormsModule } from '@angular/forms';

import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  imports: [BrowserModule, NgxPaginationModule,  Ng2SearchPipeModule, FormsModule ],
  declarations: [
    AppComponent,

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
