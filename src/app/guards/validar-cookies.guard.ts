import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { SessionService } from '../services/session.service';
import { environment } from '../../environments/environment';
import { SignOutService } from '../services/sign-out.service';
@Injectable({
  providedIn: 'root'
})
export class ValidarCookiesGuard implements CanActivate, CanLoad {

  constructor(private router: Router, private sessionService: SessionService, private signOut: SignOutService){
    
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    // let authorizeRequest = `${ environment.AUTHORIZE_ENDPOINT }?response_type=${ environment.RESPONSE_TYPE }&scope=${ environment.SCOPE }&redirect_uri=${ environment.REDIRECT_URI }&client_id=${ environment.CLIENT_ID }`;

    const token = this.sessionService.getSessionParameter("ACCESS_TOKEN");
    let booleanResponse = false;

    console.log("Can load")
    console.log('token desde guard', token)

    return this.sessionService.validateJWT(token)
    .pipe(
      tap(valid=>{
        if(!valid){
          this.sessionService.resetAuthenticatedSession();
          this.router.navigateByUrl('/Public')
        }
      })
      )
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("Can canActivate")


    const token = this.sessionService.getSessionParameter("ACCESS_TOKEN");
    
    let booleanResponse = false;

    console.log("Can load")
    console.log('token desde guard', token)
    
    return this.sessionService.validateJWT(token)
    .pipe(
      tap(valid=>{
        if(!valid){
          this.sessionService.resetAuthenticatedSession();
          this.router.navigateByUrl('/Public')
        }
      })
      )

  }


  
}
