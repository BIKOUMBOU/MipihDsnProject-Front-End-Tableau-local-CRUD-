import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from '../services/site.service';
import { Site } from '../model/site.model';

@Component({
  selector: 'app-update-site',
  templateUrl: './update-site.component.html',
  
 })
 export class UpdateSiteComponent implements OnInit {

  currentSite = new Site();

  constructor(private activatedRoute: ActivatedRoute, 
              private router : Router,
              private siteService: SiteService) {}

  ngOnInit(): void {
   this.siteService.consulterSite(this.activatedRoute.snapshot.params.id).
    subscribe(sit =>{ 
      this.currentSite = sit; });  
    }
    
    updateSite() { 
      console.log("cliqué");
      this.siteService.updateSite(this.currentSite).subscribe(sit=> { 
        this.router.navigate(['sites']); },
        (error) => { alert("Problème lors de la modification !"); } 
        ); 
      }



   }

   
