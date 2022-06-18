export const environment = {
  production: true,
  TOKEN_ENDPOINT: "http://identity.mobile.qa.grupochien.local:9443/oauth2/token",
  AUTHORIZE_ENDPOINT: "http://identity.mobile.qa.grupochien.local:9443/oauth2/authorize",
  RESPONSE_TYPE: "code",
  SCOPE: "openid",
  REDIRECT_URI: "https://christophersierradev.xyz/auth/login", // https://localhost:9000/login
  CLIENT_ID: "aIS2mMCLA75T41XyblnfqPz2UCca",
  CLIENT_SECRET: "mThgepHTwQYwlOO2W_qwhfDfkT8a",
  GRANT_TYPE: "authorization_code",
  CLIENT_URL: "https://christophersierradev.xyz/",
  LOGOUT_URL: "http://identity.mobile.qa.grupochien.local:9443/oidc/logout",
  COOKIE_PATH: "/",
  API_URL: "https://api.assi.cl/tfp"
};
