import { Injectable } from '@angular/core';
import { Site } from '../model/site.model';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';

const httpOptions = { 
  headers: new HttpHeaders({'Content-Type': 'application/json',})
};
const baseUrl = `${environment.apiUrl}/sites`;


@Injectable({
  providedIn: 'root'
})

export class SiteService {


  /* private apiServerUrl=environment.apiBaseUrl; */

  constructor(private http: HttpClient) {}


   listerAllSites(): Observable<Site[]>{
    return this.http.get<Site[]>(baseUrl);
   }

   listerAllSite(id: number): Observable<Site[]>{
    return this.http.get<Site[]>(`${baseUrl}/site/+id`);
   }
   

   nouveauSite(site: Site):Observable<Site>{ 
    return this.http.post<Site>(`${baseUrl}/addSite`,site,);
    }

   nouveauSites(sites:Site[]):Observable<Site[]>{
    return this.http.post<Site[]>(`${baseUrl}/addSites`,sites);
}


   updateSite(site:Site):Observable<Site>{
      return this.http.put<Site>(`${baseUrl}/updateSite.id`,site);
  }

   supprimerSite(id: number) { 
     return this.http.delete(`${baseUrl}/${id}/delete)`,{responseType: 'text'});

   }


/*   consulterSite(id: number): Observable<Site> { 
    const url =`${this.apiServerUrl}/${id}`; 
    return this.http.get<Site>(url); 
   }
 */


} 




/* @Injectable({
  providedIn: 'root'
})
export class SiteService{

  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getSites():Observable<Site[]>{
      return this.http.get<Site[]>(`${this.apiServerUrl}/sites`);
  }
  public addSites(sites:Site[]):Observable<Site[]>{
      return this.http.post<Site[]>(`${this.apiServerUrl}/addSites`,sites);
  }

  public addSite(site:Site[]):Observable<Site>{
      return this.http.post<Site>(`${this.apiServerUrl}/addSite`,site);
  }

  public updateSite(site:Site):Observable<Site>{
      return this.http.put<Site>(`${this.apiServerUrl}/updateSite`,site);
  }

  public deleteSite(site: number):Observable<Site>{
      return this.http.delete<Site>(`${this.apiServerUrl}/deleteSite`);
  }


} */
