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


ngOnInit(): void {
  this.siteService.listerAllSites().subscribe(
    (response:Site[])=>{
      this.sites=response;
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  )
}

/*   supprimerSite(s: Site) { 
    let conf = confirm("Etes-vous sûr de vouloir supprimer cet enregistrement ?"); 
    if (conf) this.siteService.supprimerSite(s.id).subscribe(() => {
       console.log("site supprimé"); 
       this.SupprimerSiteDuTableau(s);
      }); 
      
    }
    
    SupprimerSiteDuTableau(sit : Site) { 
      this.sites.forEach((cur, index) => { 
        if(sit.id=== cur.id) { 
          this.sites.splice(index, 1); 
         } 
       }); 
     } */

}
