import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, Routes } from '@angular/router';
import { AngularPaginatorModule } from 'angular-paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableauAdmComponent } from './tableau-adm/tableau-adm.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const appRoutes:Routes = 
[
  {
    path:"app-tableau-adm", 
    component:TableauAdmComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableauAdmComponent
  ],
  imports: [
    AngularPaginatorModule,
    BrowserModule,
    NgxPaginationModule,
    FormsModule, 
   Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
export class AppRoutingModule {
}