import type { AuthConfig, ResponseType, TokenAuthMethod } from '@nxweb/auth';

export const Auth: AuthConfig = {
  domain: process.env.AUTH_DOMAIN,

  clientId: process.env.AUTH_CLIENT,
  responseType: process.env.AUTH_RESPONSE_TYPE as ResponseType,
  scope: process.env.AUTH_SCOPE,
  tokenAuthMethod: process.env.AUTH_TOKEN_METHOD as TokenAuthMethod,

  authorizeURL: '/oauth2/auth',
  logoutRedirectURL: process.env.AUTH_LOGOUT_URL,
  logoutURL: '/oauth2/sessions/logout',
  redirectURL: process.env.AUTH_REDIRECT_URL,
  tokenURL: '/oauth2/token'
};
