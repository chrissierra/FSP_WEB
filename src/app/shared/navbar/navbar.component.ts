import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private signInService: SignInService, private sessionService: SessionService) { }

  ngOnInit(): void {

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

        console.log(_tokenResponse)
        console.log(this.sessionService.decodeIdToken(session.ID_TOKEN));
        return;
    }

    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      this.signInService.sendTokenRequest(code)
          .then(response => {
              console.log("TOKEN REQUEST SUCCESS", response);

          })
          .catch((error => {
              console.log("TOKEN REQUEST ERROR", error);

          }));
  }
  }

  eventoClick(): void {

    this.signInService.sendAuthorizationRequest()
/*     const yourUrl = 'https://localhost:9443/samlartresolve'
fetch(yourUrl, {
    method: 'GET',
    headers: new Headers({
        'Access-Control-Allow-Origin': '*',
    }),
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err)); */

    

  }

}
