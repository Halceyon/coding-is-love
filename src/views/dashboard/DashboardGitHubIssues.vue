<template>
  <div>
    <v-btn @click="authenticateWithGitHub">
      Authenticate with GitHub
    </v-btn>
    <div v-if="isAuthenticated">
      <v-btn @click="fetchGitHubIssues">
        List GitHub Issues
      </v-btn>
      <ul>
        <li v-for="issue in issues" :key="issue.id">
          {{ issue.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Octokit } from '@octokit/rest';
import client from '../../oidc';

export default {
  data() {
    return {
      isAuthenticated: false,
      gitHubToken: null,
      issues: [],
    };
  },
  methods: {
    async authenticateWithGitHub() {
      // Your authentication logic using vue-oauth2-implicit or vue-oauth2-oidc
      // Set this.isAuthenticated to true and save the token to this.gitHubToken
      // Save the token to local storage using localStorage.setItem()
      window.location.href = client.token.getUri();

      // const token = await client.token.getToken();
      // console.debug(token);
    },
    async fetchGitHubIssues() {
      if (this.isAuthenticated && this.gitHubToken) {
        const octokit = new Octokit({ auth: this.gitHubToken });

        try {
          const response = await octokit.issues.listForAuthenticatedUser({
            filter: 'all',
          });

          this.issues = response.data;
        } catch (error) {
          console.error('Error fetching GitHub issues:', error);
        }
      }
    },
  },
};
</script>
