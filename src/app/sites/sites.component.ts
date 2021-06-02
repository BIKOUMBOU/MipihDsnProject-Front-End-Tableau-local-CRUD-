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

  constructor(private siteService : SiteService,
              private router : Router,) { 
  }

  listerAllSites(){
    
   this.siteService.listerAllSites().subscribe(sites => {
    console.log(sites);
    this.sites = sites;
  });
};

ngOnInit(): void {
  this.router.events.subscribe(Sites => {
    this.listerAllSites();
  });

}
  
  SupprimerSite(id: number): void {
    console.log("cliqué"); 
    let conf = confirm("Etes-vous sûr de vouloir supprimer cet enregistrement ?"); 
    if (conf) this.siteService.supprimerSite(id)
        .subscribe(
          (response: string)=> {
       console.log("site supprimé"); 
       this.listerAllSites();

      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );

   } 

  }


