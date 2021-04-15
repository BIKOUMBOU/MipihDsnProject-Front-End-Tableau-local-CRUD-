import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SitesComponent } from './sites/sites.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { ListSiteComponent } from './list-site/list-site.component';
import { FormsModule } from '@angular/forms';
import { UpdateSiteComponent } from './update-site/update-site.component';




@NgModule({
  declarations: [
    AppComponent,
    SitesComponent,
    AddSiteComponent,
    ListSiteComponent,
    UpdateSiteComponent,
  
  
    
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
