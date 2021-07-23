import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { Site } from '../model/site.model';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

/* 
 const httpOptions = { 
  headers: new HttpHeaders({'Content-Type': 'application/json',})
};
 const baseUrl = `${environment.apiUrl}/sites`; */


 @Injectable({
  providedIn: 'root'
})

export class SiteService {


  private apiServerUrl=environment.apiBaseUrl; 

  constructor(private http: HttpClient) {}


   listerAllSites(): Observable<Site[]>{
    return this.http.get<Site[]>(`${this.apiServerUrl}/sites`);
  }


   listerSites(): Observable<Site[]>{
    return this.http.get<Site[]>(`${this.apiServerUrl}/sites`);
   }

   listerSite(id: number): Observable<Site[]>{
    return this.http.get<Site[]>(`${this.apiServerUrl}/site/${id}`);
   }

 
   nouveauSites(sites:Site[]):Observable<Site[]>{
    return this.http.post<Site[]>(`${this.apiServerUrl}/addSites`,sites);
  }


   nouveauSite(site: Site):Observable<Site>{ 
    return this.http.post<Site>(`${this.apiServerUrl}/addSite`,site);
  }

  
   updateSite(site:Site):Observable<Site>{
    return this.http.put<Site>(`${this.apiServerUrl}/updateSite`,site);
  }

   updatedifSite(site:Site):Observable<Site>{
    return this.http.put<Site>(`${this.apiServerUrl}/updatedifSite`,site);
  }

   updateconSite(site:Site):Observable<Site>{
    return this.http.put<Site>(`${this.apiServerUrl}/updateconSite`,site);
  }

   updaterespSite(site:Site):Observable<Site>{
    return this.http.put<Site>(`${this.apiServerUrl}/updaterespSite`,site);
  }

   supprimerSite(id: number){
    /* return this.http.delete(`${this.apiServerUrl}/delete/${id}`,{responseType: 'text'}); */
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`);
  }


   consulterSite(id: number): Observable<Site>{ 
    const url = `${this.apiServerUrl}/site/${id}`; 
    return this.http.get<Site>(url);   
  }

   consulterdifSite(id: number): Observable<Site>{ 
    const url = `${this.apiServerUrl}/site/${id}`; 
    return this.http.get<Site>(url);     
  }

   consulterconSite(id: number): Observable<Site>{ 
    const url = `${this.apiServerUrl}/site/${id}`; 
    return this.http.get<Site>(url);     
  }

   consulterespSite(id: number): Observable<Site>{ 
    const url = `${this.apiServerUrl}/site/${id}`; 
    return this.http.get<Site>(url);     
  }

  getUserFromDB(username:string):Observable<User> { 
  
    const url = `${this.apiServerUrl}/${username}`; 
    return this.http.get<User>(url); 
  }



   rechercherSites(keyword:string):Observable<Site[]>{
    return this.http.get<Site[]>(`${this.apiServerUrl}/sites?nom_like="+keyword`);
  }
  



}



 





















