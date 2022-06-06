import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ValidarCookiesGuard implements CanActivate, CanLoad {

  constructor( private sessionService: SessionService){
    
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    let authorizeRequest = `${ environment.AUTHORIZE_ENDPOINT }?response_type=${ environment.RESPONSE_TYPE }&scope=${ environment.SCOPE }&redirect_uri=${ environment.REDIRECT_URI }&client_id=${ environment.CLIENT_ID }`;

    const token = this.sessionService.getSessionParameter("ID_TOKEN");
    console.log("Can load")
    

    if(!this.sessionService.isValidSession()){
      return false;
    }

    if(!this.sessionService.isSessionExpired()){
      this.sessionService.resetAuthenticatedSession()
      window.location.href = `${environment.LOGOUT_URL}?id_token_hint=${token}&post_logout_redirect_uri=${environment.REDIRECT_URI}`;
      return false;
    }else{
      return true;
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("Can canActivate")


      let authorizeRequest = `${ environment.AUTHORIZE_ENDPOINT }?response_type=${ environment.RESPONSE_TYPE }&scope=${ environment.SCOPE }&redirect_uri=${ environment.REDIRECT_URI }&client_id=${ environment.CLIENT_ID }`;

      const token = this.sessionService.getSessionParameter("ID_TOKEN");
      
  
      if(!this.sessionService.isValidSession()){
        return false;
      }
  
      if(!this.sessionService.isSessionExpired()){
        this.sessionService.resetAuthenticatedSession()
        window.location.href = `${environment.LOGOUT_URL}?id_token_hint=${token}&post_logout_redirect_uri=${environment.REDIRECT_URI}`;
        return false;
      }else{
        return true;
      }
  }


  
}
