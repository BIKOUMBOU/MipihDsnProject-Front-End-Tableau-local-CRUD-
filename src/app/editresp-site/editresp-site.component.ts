import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from '../services/site.service';
import { Site } from '../model/site.model';

@Component({
  selector: 'app-editresp-site',
  templateUrl: './editresp-site.component.html',
})

export class EditrespSiteComponent implements OnInit {

  curreSite = new Site();

  constructor(private activatedRoute: ActivatedRoute, 
              private router : Router,
              private siteService: SiteService) {}

  ngOnInit(): void {
   this.siteService.consulterespSite(this.activatedRoute.snapshot.params.id).
    subscribe(sit =>{ 
      this.curreSite = sit; });  
  }
    
  updaterespSite() { 
      console.log("cliqué");
      this.siteService. updaterespSite(this.curreSite).subscribe(sit=> { 
        this.router.navigate(['listeresp-site']); },
        (error) => { alert("Problème lors de la modification !"); } 
        ); 
    }



}