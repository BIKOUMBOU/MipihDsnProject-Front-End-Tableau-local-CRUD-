import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Site } from '../model/site.model';
import { SiteService } from '../services/site.service';
import { catchError, map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html'
})


export class SitesComponent implements OnInit {


  sites: Site[]; //Un tableau de sites
  http: any;

  constructor(private siteService : SiteService,private router : Router,) {}

  listerAllSites(){
    
    this.siteService.listerAllSites().subscribe(sites => {
     console.log(sites);
     this.sites = sites;
   });
 };


ngOnInit(): void {

  this.siteService.listerAllSites().subscribe(sites=>{
    console.log(sites)
      this.sites=sites;
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  )
}

  SupprimerSite(id: number){
    console.log("cliqué");
    console.log (id);
    let conf = confirm("Êtes-vous sûr de vouloir supprimer cet enregistrement ?"); 
    if (conf==true)  
    this.siteService.supprimerSite(id).subscribe(()=> {
      console.log("site supprimé");
     }); 
      
      this.router.navigate(['sites']).then(() => {
       window.location.reload();
     }); 
}


AddSite(s: Site){
  this.router.navigateByUrl("/addSite")
}

AddconsulSite(s: Site){
  this.router.navigateByUrl("/addSite")
}

AddrespSite(s: Site){
  this.router.navigateByUrl("/addSite")
}

adddifSite(s: Site){
  this.router.navigateByUrl("/addSite")
}

ListeSite(){
  this.router.navigateByUrl("/liste-Site")
}

updateSite(){
  this.router.navigateByUrl("/UpdateSite")
}

Update(s: Site) {
  this.router.navigateByUrl("/UpdateSite/"+s.id);
}

}



