import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    PageConnexionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
