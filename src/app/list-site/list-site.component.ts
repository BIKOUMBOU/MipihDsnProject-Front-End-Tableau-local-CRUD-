import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Site } from '../model/site.model';
import { SiteService } from '../services/site.service';
import { catchError, map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-list-site',
  templateUrl: './list-site.component.html'
})
export class ListSiteComponent implements OnInit {

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
  this.siteService.listerAllSites().subscribe(sites=>{
    console.log(sites)
      this.sites=sites;
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  )
}
/* 
SupprimerSite(id: number){

	console.log("cliqué"); 
   console.log (id);

 let conf = confirm("Etes-vous sûr de vouloir supprimer cet enregistrement ?"); 
  
  if (conf) 
  this.siteService.supprimerSite(id).subscribe(() => {
     console.log("site supprimé");
    }); 
     
     this.router.navigate(['sites']).then(() => {
      window.location.reload();
    });
    
    
  }
 */
}