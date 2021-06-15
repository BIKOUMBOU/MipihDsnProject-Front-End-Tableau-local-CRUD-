import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites/sites.component';
import { AddSiteComponent } from './add-site/add-site.component';
import { ListSiteComponent } from './list-site/list-site.component';
import { UpdateSiteComponent } from './update-site/update-site.component';


const routes: Routes = [
  {path:"sites", component:SitesComponent},
  {path:"add-site", component:AddSiteComponent},
  {path:"list-site", component:ListSiteComponent},
  {path: "updateSite/:id", component: UpdateSiteComponent},
  {path: "", redirectTo: "sites", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  
  imports: [RouterModule.forRoot(routes),CommonModule],

  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }


