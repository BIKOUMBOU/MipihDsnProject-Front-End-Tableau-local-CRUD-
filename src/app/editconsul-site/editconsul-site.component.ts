import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from '../services/site.service';
import { Site } from '../model/site.model';

@Component({
  selector: 'app-editconsul-site',
  templateUrl: './editconsul-site.component.html',
})

export class EditconsulSiteComponent implements OnInit {

  currenSite = new Site();

  constructor(private activatedRoute: ActivatedRoute, 
              private router : Router,
              private siteService: SiteService) {}

  ngOnInit(): void {
   this.siteService.consulterconSite(this.activatedRoute.snapshot.params.id).
    subscribe(sit =>{ 
      this.currenSite = sit; });  
  }
    
    updateconSite() { 
      console.log("cliqué");
      this.siteService. updateconSite(this.currenSite).subscribe(sit=> { 
        this.router.navigate(['listecons-site']); },
        (error) => { alert("Problème lors de la modification !"); } 
        ); 
    }



}