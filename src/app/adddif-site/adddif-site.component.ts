import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site} from 'src/app/model/site.model';
import { SiteService } from '../services/site.service';


@Component({
  selector: 'app-adddif-site',
  templateUrl: './adddif-site.component.html',
})
export class AdddifSiteComponent implements OnInit {

  newSite = new Site();

  message :String
  
  constructor(private siteService : SiteService,
              private router : Router,) {}
  
  
    ngOnInit(): void {
    }
    
    adddifSite(){ 
      this.siteService.nouveauSite(this.newSite).subscribe(sit=> { 
        //console.log(sit);
        alert("Information(s)Enregistrée(s) avec succès");
      }); 
      this.router.navigate(['listedif-site']).then(() =>{
        window.location.reload();
      });
    }
  
  
  
  } 