// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  TOKEN_ENDPOINT: "https://localhost:9443/oauth2/token",
  AUTHORIZE_ENDPOINT: "https://localhost:9443/oauth2/authorize",
  RESPONSE_TYPE: "code",
  SCOPE: "openid",
  REDIRECT_URI: "https://localhost:4200/auth/login", // https://localhost:9000/login
  CLIENT_ID: "yTsXkvABMAQ7GW3vWAygdoTBNp8a",
  CLIENT_SECRET: "muISt7iVk9uXJuX73KWElfg7XOYa",
  GRANT_TYPE: "authorization_code",
  CLIENT_URL: "https://localhost:4200/",
  LOGOUT_URL: "https://localhost:9443/oidc/logout",
  COOKIE_PATH: "/"
};



/* export const CONFIG = {
  "TOKEN_ENDPOINT": "https://localhost:9443/oauth2/token",
  "AUTHORIZE_ENDPOINT": "https://localhost:9443/oauth2/authorize",
  "RESPONSE_TYPE": "code",
  "SCOPE": "openid",
  "REDIRECT_URI": "https://localhost:3000/", // https://localhost:9000/login
  "CLIENT_ID": "yTsXkvABMAQ7GW3vWAygdoTBNp8a",
  "CLIENT_SECRET": "muISt7iVk9uXJuX73KWElfg7XOYa",
  "GRANT_TYPE": "authorization_code",
  "CLIENT_URL": "https://localhost:3000",
  "LOGOUT_URL": "https://localhost:9443/oidc/logout",
  "COOKIE_PATH": "/"
}; */


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
