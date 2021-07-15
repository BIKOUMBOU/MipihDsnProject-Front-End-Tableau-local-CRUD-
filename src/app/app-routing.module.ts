import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites/sites.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { ListSiteComponent } from './list-site/list-site.component';
import { UpdateSiteComponent } from './update-site/update-site.component';
import { ListedifSiteComponent } from './listedif-site/listedif-site.component';
import { ListeconsSiteComponent } from './listecons-site/listecons-site.component';
import { ListerespSiteComponent } from './listeresp-site/listeresp-site.component';


const routes: Routes = [
  {path:"sites", component:SitesComponent},
  {path:"listedif-site", component:ListedifSiteComponent},
  {path:"listecons-site", component:ListeconsSiteComponent},
  {path:"listeresp-site", component:ListerespSiteComponent},
  {path:"list-site", component:ListSiteComponent},
  {path:"add-site", component:AddSiteComponent},
  {path:"update-site", component:UpdateSiteComponent},
  {path: "updateSite/:id", component: UpdateSiteComponent},
  {path: "", redirectTo: "sites", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  
  imports: [RouterModule.forRoot(routes),CommonModule],

  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }


