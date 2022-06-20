import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private signInService: SignInService, private sessionService: SessionService, private router: Router) { }
  response_wso2: any;
  ngOnInit(): void {

    console.log("this.sessionService.isValidSession()", this.sessionService.isValidSession())

    if (this.sessionService.isValidSession()) {
      
      console.log("is valid sesision")
      const session = this.sessionService.getAllSessionParameters();
      const _tokenResponse = {
          access_token: session.ACCESS_TOKEN,
          refresh_token: session.REFRESH_TOKEN,
          scope: session.SCOPE,
          id_token: session.ID_TOKEN,
          token_type: session.TOKEN_TYPE,
          expires_in: parseInt(session.EXPIRES_IN),
      };

      

      console.log('La sesión es válida', _tokenResponse)
      this.response_wso2 = _tokenResponse;
      localStorage.setItem('login1', JSON.stringify(_tokenResponse))
/*       console.log("this.sessionService.decodeIdToken(session.ID_TOKEN)", this.sessionService.decodeIdToken(session.ID_TOKEN));
      console.log(this.sessionService.decodeIdToken(session.ID_TOKEN).exp > (new Date().getTime()/1000))
      console.log("ahora", (new Date().getTime()/1000))
      console.log("la hor d expiracion", this.sessionService.decodeIdToken(session.ID_TOKEN).exp) */
      this.router.navigate(['/user-area/index'])
      return;
    }

    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      this.signInService.sendTokenRequest(code)
          .then(response => {
              console.log("TOKEN REQUEST SUCCESS", response);
              localStorage.setItem('login2', JSON.stringify(response))
              this.sessionService.initAuthenticatedSession(response);
              this.router.navigate(['/user-area/index'])

          })
          .catch((error => {
              console.log("TOKEN REQUEST ERROR", error);
              this.router.navigate(['/Public'])
          }));
  }
  }

}
