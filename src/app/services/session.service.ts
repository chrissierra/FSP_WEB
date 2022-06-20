import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private helperService: HelperService, private http: HttpClient) { }

  initAuthenticatedSession(data: any){
    console.log('initautenthisession', data)
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

  resetAuthenticatedSession(){
/*     this.helperService.removeCookie("ACCESS_TOKEN", data.access_token);
    this.helperService.removeCookie("REFRESH_TOKEN", data.refresh_token);
    this.helperService.removeCookie("SCOPE", data.scope);
    this.helperService.removeCookie("ID_TOKEN", data.id_token);
    this.helperService.removeCookie("TOKEN_TYPE", data.token_type);
    this.helperService.removeCookie("EXPIRES_IN", data.expires_in); */
    this.helperService.removeCookie("ACCESS_TOKEN");
    this.helperService.removeCookie("REFRESH_TOKEN");
    this.helperService.removeCookie("SCOPE");
    this.helperService.removeCookie("ID_TOKEN");
    this.helperService.removeCookie("TOKEN_TYPE");
    this.helperService.removeCookie("EXPIRES_IN");
  }

  isValidSession(){
    const token = this.helperService.getCookie("ACCESS_TOKEN");
    return !!token;
  }

  isSessionExpired(){
    const session = this.getAllSessionParameters();
    console.log(' this.decodeIdToken(session.ID_TOKEN).exp',  this.decodeIdToken(session.ID_TOKEN).exp)
    console.log(' (new Date().getTime()/1000)', (new Date().getTime()/1000))
    return  this.decodeIdToken(session.ID_TOKEN).exp > (new Date().getTime()/1000)
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


  validateJWT(token: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    
    return this.http.get(environment.JWT_ENDPOINT, { headers })
  }



  /* 
    curl -k -H "Authorization: Bearer eyJ4NXQiOiJNell4TW1Ga09HWXdNV0kwWldObU5EY3hOR1l3WW1NNFpUQTNNV0kyTkRBelpHUXpOR00wWkdSbE5qSmtPREZrWkRSaU9URmtNV0ZoTXpVMlpHVmxOZyIsImtpZCI6Ik16WXhNbUZrT0dZd01XSTBaV05tTkRjeE5HWXdZbU00WlRBM01XSTJOREF6WkdRek5HTTBaR1JsTmpKa09ERmtaRFJpT1RGa01XRmhNelUyWkdWbE5nX1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5NzAwNDE3LUsiLCJhdXQiOiJBUFBMSUNBVElPTl9VU0VSIiwiYXVkIjoiYUlTMm1NQ0xBNzVUNDFYeWJsbmZxUHoyVUNjYSIsIm5iZiI6MTY1NTczNzUzMywiYXpwIjoiYUlTMm1NQ0xBNzVUNDFYeWJsbmZxUHoyVUNjYSIsInNjb3BlIjoib3BlbmlkIiwiaXNzIjoiaHR0cHM6XC9cL2xvY2FsaG9zdDo5NDQzXC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNjU1NzM3NTczLCJpYXQiOjE2NTU3Mzc1MzMsImp0aSI6IjdkZThmNmRmLTNjNTgtNGI5YS1iMDM5LTJjZDE3ZmQ5ZWVmMCJ9.cttOm_7f4N7OMoZs6VKSIhXXS0EdN8-BRWXctZ9Tgj8pmi66KNilJIr5J8MJBfp_92vUN0nJqFM2g2fyOgEnfW5_4yuDPQDl5a0CvIXTkD3bRTQmUvUGRjHL0yjtDihVCtPq9yqjTft938WWtl6GHKhODE89ROIsJNgO7-1M_gmK1lfKIzxtv2ZFfNGLdYcQ5iamkik44QxlYVgQ_gQGY0F-mGqE7h1Nr9b1JfAQDxsVJQkbi1BdOiAPIRf4bVtLTRA9vZf5K40Kvp1dJhVF4BWFgSwnCSJ6wa9HxvkQhe16uCsLzuB78lmbrVjw1fn5xKNPdss5lPViztAcXixhtQ" https://identity.mobile.qa.grupochien.local:9443/oauth2/userinfo?schema=openid
    
    "eyJ4NXQiOiJNell4TW1Ga09HWXdNV0kwWldObU5EY3hOR1l3WW1NNFpUQTNNV0kyTkRBelpHUXpOR00wWkdSbE5qSmtPREZrWkRSaU9URmtNV0ZoTXpVMlpHVmxOZyIsImtpZCI6Ik16WXhNbUZrT0dZd01XSTBaV05tTkRjeE5HWXdZbU00WlRBM01XSTJOREF6WkdRek5HTTBaR1JsTmpKa09ERmtaRFJpT1RGa01XRmhNelUyWkdWbE5nX1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5NzAwNDE3LUsiLCJhdXQiOiJBUFBMSUNBVElPTl9VU0VSIiwiYXVkIjoiYUlTMm1NQ0xBNzVUNDFYeWJsbmZxUHoyVUNjYSIsIm5iZiI6MTY1NTczNzA0NCwiYXpwIjoiYUlTMm1NQ0xBNzVUNDFYeWJsbmZxUHoyVUNjYSIsInNjb3BlIjoib3BlbmlkIiwiaXNzIjoiaHR0cHM6XC9cL2xvY2FsaG9zdDo5NDQzXC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNjU1NzM3MDY0LCJpYXQiOjE2NTU3MzcwNDQsImp0aSI6IjhhMDNlMDc5LWI4ZDMtNGMxNi05ODhjLTkzY2I0NjMwOWNjOCJ9.VwCf2hFWv_d0LMdAUrWxjZcddvwuiVoxSrtpTYmNxp5so3031J_7jA28wwknqG48i5xsT_5RZBz-gXpOf6YpQp4wUU93eXO8fqH2TEUk_RWBVByDaE8ZOozXbFYC1e3Bbwpijp4EejfGSXFACxKTYCzv0EV24mquEYhSXE1pENL2v4GkHBrqXq9HDFElfqSeoFs5FOEZqKVFMkha5GkS4NtSQSN154xD1tiRfj7sZdnzdIXuQnzwOnAx5HsjyK2lr4cI9A8GDIfB7o7lF4yOvy8SE--5H7Uksw1vs-7sWAz9kARElUGgqBD7SaRjs_vGSwpfVpP3FDUKwQoRFIfGtA"

  fetch("https://identity.mobile.qa.grupochien.local:9443/oauth2/userinfo?schema=openid", {
  headers: {
    Authorization: "Bearer eyJ4NXQiOiJNell4TW1Ga09HWXdNV0kwWldObU5EY3hOR1l3WW1NNFpUQTNNV0kyTkRBelpHUXpOR00wWkdSbE5qSmtPREZrWkRSaU9URmtNV0ZoTXpVMlpHVmxOZyIsImtpZCI6Ik16WXhNbUZrT0dZd01XSTBaV05tTkRjeE5HWXdZbU00WlRBM01XSTJOREF6WkdRek5HTTBaR1JsTmpKa09ERmtaRFJpT1RGa01XRmhNelUyWkdWbE5nX1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI5NzAwNDE3LUsiLCJhdXQiOiJBUFBMSUNBVElPTl9VU0VSIiwiYXVkIjoiYUlTMm1NQ0xBNzVUNDFYeWJsbmZxUHoyVUNjYSIsIm5iZiI6MTY1NTczNzUzMywiYXpwIjoiYUlTMm1NQ0xBNzVUNDFYeWJsbmZxUHoyVUNjYSIsInNjb3BlIjoib3BlbmlkIiwiaXNzIjoiaHR0cHM6XC9cL2xvY2FsaG9zdDo5NDQzXC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNjU1NzM3NTczLCJpYXQiOjE2NTU3Mzc1MzMsImp0aSI6IjdkZThmNmRmLTNjNTgtNGI5YS1iMDM5LTJjZDE3ZmQ5ZWVmMCJ9.cttOm_7f4N7OMoZs6VKSIhXXS0EdN8-BRWXctZ9Tgj8pmi66KNilJIr5J8MJBfp_92vUN0nJqFM2g2fyOgEnfW5_4yuDPQDl5a0CvIXTkD3bRTQmUvUGRjHL0yjtDihVCtPq9yqjTft938WWtl6GHKhODE89ROIsJNgO7-1M_gmK1lfKIzxtv2ZFfNGLdYcQ5iamkik44QxlYVgQ_gQGY0F-mGqE7h1Nr9b1JfAQDxsVJQkbi1BdOiAPIRf4bVtLTRA9vZf5K40Kvp1dJhVF4BWFgSwnCSJ6wa9HxvkQhe16uCsLzuB78lmbrVjw1fn5xKNPdss5lPViztAcXixhtQ"
  }
})


    */

}
