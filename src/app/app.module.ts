import { HttpClientModule } from '@angular/common/http';
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
import { ListedifSiteComponent } from './listedif-site/listedif-site.component';
import { ListeconsSiteComponent } from './listecons-site/listecons-site.component';
import { ListerespSiteComponent } from './listeresp-site/listeresp-site.component';





@NgModule({
  declarations: [
    AppComponent,
    SitesComponent,
    AddSiteComponent,
    ListSiteComponent,
    UpdateSiteComponent,
    ListedifSiteComponent,
    ListeconsSiteComponent,
    ListerespSiteComponent,
  
    
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
