import { Injectable } from '@angular/core';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private helperService: HelperService) { }

  initAuthenticatedSession(data: any){
    this.helperService.setCookie("ACCESS_TOKEN", data.access_token);
    this.helperService.setCookie("REFRESH_TOKEN", data.refresh_token);
    this.helperService.setCookie("SCOPE", data.scope);
    this.helperService.setCookie("ID_TOKEN", data.id_token);
    this.helperService.setCookie("TOKEN_TYPE", data.token_type);
    this.helperService.setCookie("EXPIRES_IN", data.expires_in);

  }

  getSessionParameter(key: any){
    return this.helperService.getCookie(key);
  }

  resetAuthenticatedSession(data: any){
    this.helperService.removeCookie("ACCESS_TOKEN", data.access_token);
    this.helperService.removeCookie("REFRESH_TOKEN", data.refresh_token);
    this.helperService.removeCookie("SCOPE", data.scope);
    this.helperService.removeCookie("ID_TOKEN", data.id_token);
    this.helperService.removeCookie("TOKEN_TYPE", data.token_type);
    this.helperService.removeCookie("EXPIRES_IN", data.expires_in);
  }

  isValidSession(){
    const token = this.helperService.getCookie("ACCESS_TOKEN");
    return !!token;
  }

  getAllSessionParameters(){
    const session: any = {};

    session["ACCESS_TOKEN"] = this.helperService.getCookie("ACCESS_TOKEN");
    session["REFRESH_TOKEN"] = this.helperService.getCookie("REFRESH_TOKEN");
    session["SCOPE"] = this.helperService.getCookie("SCOPE");
    session["ID_TOKEN"] = this.helperService.getCookie("ID_TOKEN");
    session["TOKEN_TYPE"] = this.helperService.getCookie("TOKEN_TYPE");
    session["EXPIRES_IN"] = this.helperService.getCookie("EXPIRES_IN");

    return session;
  }

  decodeIdToken(token: any){
    return JSON.parse(atob(token.split(".")[1]));
  }

}