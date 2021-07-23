import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site} from 'src/app/model/site.model';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-addconsul-site',
  templateUrl: './addconsul-site.component.html',
})
export class AddconsulSiteComponent implements OnInit {

  newSite = new Site();

  message :String
  
  constructor(private siteService : SiteService,
              private router : Router,) {}
  
  
    ngOnInit(): void {
    }
    
    addconsulSite(){ 
      this.siteService.nouveauSite(this.newSite).subscribe(sit=> { 
        //console.log(sit);
        alert("Information(s)Enregistrée(s) avec succès");
      }); 
      this.router.navigate(['listecons-site']).then(() =>{
        window.location.reload();
      });
    }
  
  
  
  } 