import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Site} from 'src/app/model/site.model';
import { SiteService } from '../services/site.service';


@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html'
})
export class AddSiteComponent implements OnInit {

newSite = new Site();

message :String

constructor(private siteService : SiteService,
            private router : Router,) {}


  ngOnInit(): void {
  }
  
  addSite(){ 
    this.siteService.nouveauSite(this.newSite).subscribe(sit=> { 
      //console.log(sit);
      alert("Information(s)Enregistrée(s) avec succès");
    }); 
    this.router.navigate(['sites']).then(() =>{
      window.location.reload();
    });
  }



} 
