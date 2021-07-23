import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site} from 'src/app/model/site.model';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-addresp-site',
  templateUrl: './addresp-site.component.html',
})
export class AddrespSiteComponent implements OnInit {

  newSite = new Site();

  message :String
  
  constructor(private siteService : SiteService,
              private router : Router,) {}
  
  
    ngOnInit(): void {
    }
    
    addrespSite(){ 
      this.siteService.nouveauSite(this.newSite).subscribe(sit=> { 
        //console.log(sit);
        alert("Information(s)Enregistrée(s) avec succès");
      }); 
      this.router.navigate(['listeresp-site']).then(() =>{
        window.location.reload();
      });
    }
  
  
  
  } 