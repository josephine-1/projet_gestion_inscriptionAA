import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableauAdmComponent } from './tableau-adm/tableau-adm.component';
import { TableauAdmArchiveComponent } from './tableau-adm-archive/tableau-adm-archive.component';
import { ModifierComponent } from './modifier/modifier.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PageUserComponent } from './page-user/page-user.component';

const routes: Routes = [
  { path: '', component: PageConnexionComponent },
  { path: 'active', component: TableauAdmComponent },
  { path: 'modifier/:id', component: ModifierComponent },
  { path: 'user', component: PageUserComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'archive', component: TableauAdmArchiveComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
