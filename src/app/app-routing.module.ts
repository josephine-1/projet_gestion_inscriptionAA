import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableauAdmComponent } from './tableau-adm/tableau-adm.component';
import { TableauAdmArchiveComponent } from './tableau-adm-archive/tableau-adm-archive.component';
import { ModifierComponent } from './modifier/modifier.component';


const routes: Routes = [
  { path: '', component: TableauAdmComponent },
  { path: 'active', component: TableauAdmComponent },
  { path: 'active/modifier', component: ModifierComponent },
  { path: 'archive', component: TableauAdmArchiveComponent }
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
