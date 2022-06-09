import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HelperService {



  constructor(private cookieService: CookieService, private http: HttpClient) { }

  setCookie(cookieName: string, cookieValue: any, cookiePath = environment.COOKIE_PATH){
    this.cookieService.set(cookieName, cookieValue, 
      { 
        path: cookiePath,
        expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        secure: true
      });

  }

  removeCookie(cookieName: string, cookiePath = environment.COOKIE_PATH){
    this.cookieService.delete(cookieName, cookiePath )
  }

  getCookie(cookieName: string){
    return this.cookieService.get(cookieName);
  }

/*   testingxml(){
    
  } */


}
