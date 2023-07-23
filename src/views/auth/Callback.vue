<template>
  <div>
  </div>
</template>

<script setup>
import client from '../../oidc';

console.debug('loaded');
const originalUrl = window.location.href;
console.debug('originalUrl', originalUrl);

const url = new URL(originalUrl);

const code = url.searchParams.get('code');

console.debug('code', code);

const state = url.searchParams.get('state');

console.debug('state', state);

const nonce = url.searchParams.get('nonce');

console.debug('nonce', nonce);

const sessionState = url.searchParams.get('session_state');

console.debug('sessionState', sessionState);

const error = url.searchParams.get('error');

console.debug('error', error);

const errorDescription = url.searchParams.get('error_description');

console.debug('errorDescription', errorDescription);

const errorUri = url.searchParams.get('error_uri');

console.debug('errorUri', errorUri);

const getToken = async () => {
  const token = await client.code.getToken(window.location.href);

  // Store token in local storage or use it right away
  localStorage.setItem('githubToken', token.accessToken);

  console.debug('token', token);
};

getToken();
</script>
