import ClientOAuth2 from 'client-oauth2';

const githubAuth = new ClientOAuth2({
  clientId: '',
  clientSecret: '',
  accessTokenUri: 'https://github.com/login/oauth/access_token',
  authorizationUri: 'https://github.com/login/oauth/authorize',
  redirectUri: 'http://localhost:8080/auth/callback',
  scopes: ['notifications', 'gist'],
});

export default githubAuth;
