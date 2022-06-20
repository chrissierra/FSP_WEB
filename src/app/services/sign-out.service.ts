import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelperService } from './helper.service';
import { SessionService } from './session.service';
@Injectable({
  providedIn: 'root'
})
export class SignOutService {

  constructor(private helperService: HelperService, private http: HttpClient, private sessionService: SessionService) { }

  logOut(){
    const token = this.sessionService.getSessionParameter("ID_TOKEN");
    // Clear the session storage
    this.sessionService.resetAuthenticatedSession();
    window.location.href = `${environment.LOGOUT_URL}?id_token_hint=${token}&post_logout_redirect_uri=${environment.REDIRECT_URI}`;
  }
}
