import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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




@NgModule({
  declarations: [
    AppComponent,
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

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

