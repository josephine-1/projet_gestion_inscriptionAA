import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { PageUserComponent } from './page-user/page-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, NgxPaginationModule,  Ng2SearchPipeModule, FormsModule ],
  declarations: [
    AppComponent,
    PageUserComponent
  ],

  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
