import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from './../model/role.model';
import { Router } from '@angular/router';
import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
        
   apiServerUrl: string = 'http://localhost:9192/users/login';
 
   public loggedUser: string; 
  
   public isloggedIn: Boolean = false; 
  
   public roles: Role[];


  constructor(private router: Router, private http: HttpClient) { }

  getUserFromDB(username:string):Observable<User> { 
  
    const url = `${this.apiServerUrl}/${username}`; 
    return this.http.get<User>(url); 
  }


  signIn(user :User) { 
    this.loggedUser = user.username; 
    this.isloggedIn = true; 
    this.roles = user.roles; 
    
    localStorage.setItem('loggedUser',this.loggedUser); 
    localStorage.setItem('isloggedIn',String(this.isloggedIn)); 
  }

  isAdmin():Boolean { 
    let admin: Boolean = false; 
    if (!this.roles) //this.roles== undefiened 
        return false; 
        
       this.roles.forEach((curRole) => { 
         if(curRole.role == 'ADMIN') { 
           admin = true; 
          } 
        });
    return admin;
  }


    logout() { 
      
      this.isloggedIn= false; 
      this.loggedUser = undefined; 
      this.roles = undefined; 

      localStorage.removeItem('loggedUser'); 
      localStorage.setItem('isloggedIn',String(this.isloggedIn)); 
      
      this.router.navigate(['/login']); 
    }






}
