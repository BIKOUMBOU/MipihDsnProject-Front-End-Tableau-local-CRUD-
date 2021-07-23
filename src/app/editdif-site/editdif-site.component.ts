import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from '../services/site.service';
import { Site } from '../model/site.model';

@Component({
  selector: 'app-editdif-site',
  templateUrl: './editdif-site.component.html',
})

export class EditdifSiteComponent implements OnInit {

  currenSite = new Site();

  constructor(private activatedRoute: ActivatedRoute, 
              private router : Router,
              private siteService: SiteService) {}

  ngOnInit(): void {
   this.siteService.consulterdifSite(this.activatedRoute.snapshot.params.id).
    subscribe(sit =>{ 
      this.currenSite = sit; });  
    }
    
    updatedifSite() { 
      console.log("cliqué");
      this.siteService.updatedifSite(this.currenSite).subscribe(sit=> { 
        this.router.navigate(['listedif-site']); },
        (error) => { alert("Problème lors de la modification !"); } 
        ); 
      }



   }