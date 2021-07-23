import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites/sites.component';

import { LoginComponent } from './login/login.component';

import { ListSiteComponent } from './list-site/list-site.component';
import { ListedifSiteComponent } from './listedif-site/listedif-site.component';
import { ListeconsSiteComponent } from './listecons-site/listecons-site.component';
import { ListerespSiteComponent } from './listeresp-site/listeresp-site.component';
import { TableaudebordSiteComponent } from './tableaudebord-site/tableaudebord-site.component';


import { AddSiteComponent } from './add-site/add-site.component';
import { AdddifSiteComponent } from './adddif-site/adddif-site.component';
import { AddconsulSiteComponent } from './addconsul-site/addconsul-site.component';
import { AddrespSiteComponent } from './addresp-site/addresp-site.component';

import { UpdateSiteComponent } from './update-site/update-site.component';
import { EditrespSiteComponent } from './editresp-site/editresp-site.component';
import { EditconsulSiteComponent } from './editconsul-site/editconsul-site.component';
import { EditdifSiteComponent } from './editdif-site/editdif-site.component';
import { Editableau2bordComponent } from './editableau2bord/editableau2bord.component';



const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"sites", component:SitesComponent},
  {path:"tableaudebord-site", component:TableaudebordSiteComponent},

  {path:"list-site", component:ListSiteComponent},
  {path:"listedif-site", component:ListedifSiteComponent},
  {path:"listecons-site", component:ListeconsSiteComponent},
  {path:"listeresp-site", component:ListerespSiteComponent},
 

  {path:"add-site", component:AddSiteComponent},
  {path:"adddif-site", component:AdddifSiteComponent},
  {path:"addconsul-site", component:AddconsulSiteComponent},
  {path:"addresp-site", component:AddrespSiteComponent},

  {path:"update-site", component:UpdateSiteComponent},
  {path:"updateSite/:id", component: UpdateSiteComponent}, 
  {path:"updatedifSite/:id", component:EditdifSiteComponent},
  {path:"updateconSite/:id", component:EditconsulSiteComponent},
  {path:"updaterespSite/:id", component:EditrespSiteComponent},
  

  {path:"editdif-site", component:EditdifSiteComponent},
  {path:"editconsul-site", component:EditconsulSiteComponent},
  {path:"editresp-site", component:EditrespSiteComponent},
  {path:"editableau2bord", component:Editableau2bordComponent },

  /* {path: "", redirectTo: "tableaudebord-site", pathMatch: "full"} */
];


@NgModule({
  declarations: [],
  
  imports: [RouterModule.forRoot(routes),CommonModule],

  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }


