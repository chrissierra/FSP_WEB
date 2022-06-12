export const environment = {
  production: true,
  TOKEN_ENDPOINT: "https://localhost:9443/oauth2/token",
  AUTHORIZE_ENDPOINT: "https://localhost:9443/oauth2/authorize",
  RESPONSE_TYPE: "code",
  SCOPE: "openid",
  REDIRECT_URI: "https://localhost:4200/", // https://localhost:9000/login
  CLIENT_ID: "yTsXkvABMAQ7GW3vWAygdoTBNp8a",
  CLIENT_SECRET: "muISt7iVk9uXJuX73KWElfg7XOYa",
  GRANT_TYPE: "authorization_code",
  CLIENT_URL: "https://localhost:4200/",
  LOGOUT_URL: "https://localhost:9443/oidc/logout",
  COOKIE_PATH: "/",
  webapiurl: (window as any)["envconfig"]["apiurl"] || "default" 
};
