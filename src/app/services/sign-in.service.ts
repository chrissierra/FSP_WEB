import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private sessionService: SessionService) { }

  sendAuthorizationRequest(){
    let authorizeRequest = `${ environment.AUTHORIZE_ENDPOINT }?response_type=${ environment.RESPONSE_TYPE }&scope=${ environment.SCOPE }&redirect_uri=${ environment.REDIRECT_URI }&client_id=${ environment.CLIENT_ID }`;
    window.location.href = authorizeRequest;
  }

  sendTokenRequest(code: any){
    console.log(code)
    const body = [];
    body.push(`client_id=${ environment.CLIENT_ID }`);
    body.push(`client_secret=${ environment.CLIENT_SECRET }`);
    body.push(`code=${ code }`);
    body.push(`grant_type=${ environment.GRANT_TYPE }`);
    body.push(`redirect_uri=${ environment.REDIRECT_URI }`);
    console.log(JSON.stringify(body.join("&")))
/*     return fetch.post(`${ environment.TOKEN_ENDPOINT }`, body.join("&"), this.getTokenRequestHeaders())
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject(new Error("Invalid status code received in the token response: "
                    + response.status));
            }

            // Store the response in the session storage
            initAuthenticatedSession(response.data);

            return [response.data, decodeIdToken(response.data.id_token)];

        }).catch((error) => {
            return Promise.reject(error);
        }); */


        return fetch(`${ environment.TOKEN_ENDPOINT }`, {
          method: 'POST', // or 'PUT'
          body: (body.join("&") ), // data can be `string` or {object}!
          headers:{
            "Accept": "application/json",
            "Access-Control-Allow-Origin": `${ environment.CLIENT_URL }`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then( (response:any) => {
          if (response.status !== 200) {
            return Promise.reject(new Error("Invalid status code received in the token response: "
                + response.status));
          }

          console.log("resppose en sign in service send token ", response)

          // Store the response in the session storage
          //this.sessionService.initAuthenticatedSession(response.data);
          return response.json();
          return [response.data, this.sessionService.decodeIdToken(response.data.id_token)];
        } )

  }


  getTokenRequestHeaders(){
    return {
      headers: {
          "Accept": "application/json",
          "Access-Control-Allow-Origin": `${ environment.CLIENT_URL }`,
          "Content-Type": "application/x-www-form-urlencoded"
      }
    } 
  }


}
