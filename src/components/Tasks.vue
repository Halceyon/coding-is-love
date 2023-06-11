// id: undefined list

<template>
  <v-container>
    <v-row>
      <!-- Use vuetify components to create the layout of the component -->
      <v-col>
        <h1>My Tasks</h1>
        <v-btn color="success">
          <v-icon @click="refresh">{{ mdiRefresh }}</v-icon>
        </v-btn>
        <v-card>
          <v-list>
            <v-list-item v-for="task in tasks" :key="task.id">
              <v-list-item-title>{{ task.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { InteractiveBrowserCredential } from '@azure/identity';
import { mdiRefresh } from '@mdi/js';

export default {
  data() {
    return {
      mdiRefresh,
      accessToken: null,
      graphClient: null,
      tasks: [],
    };
  },
  async mounted() {
    console.debug(this.$chrome);
  },
  methods: {
    async fetchGraph(url) {
      const { accessToken } = this;
      console.debug(accessToken);
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.value;
    },
    async refresh() {
      console.debug('refresh');
      this.$chrome.runtime.sendMessage({ action: 'getAzureIdentity' }, (response) => {
        console.log(response?.token);
      });
      // await this.initializeGraphClient();
      // this.tasks = await this.fetchGraph('https://graph.microsoft.com/v1.0/me/todo/lists');
      // console.debug(this.tasks);
    },
    async initializeGraphClient() {
      const redirectUrl = this.$chrome.identity.getRedirectURL();
      console.debug(redirectUrl);
      const credential = new InteractiveBrowserCredential({
        clientId: process.env.VUE_APP_AZURE_IDENTITY_CLIENT_ID,
        redirectUri: redirectUrl,
      });
      const scope = 'https://graph.microsoft.com/Tasks.Read'; // replace with your scope
      this.accessToken = await credential.getToken(scope);
    },
  },
};
</script>
