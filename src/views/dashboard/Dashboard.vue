<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
    >
      <dashboard-congratulation-john></dashboard-congratulation-john>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <dashboard-git-hub-issues />
    </v-col>
  </v-row>
</template>

<script setup>
// eslint-disable-next-line object-curly-newline
import DashboardGitHubIssues from './DashboardGitHubIssues.vue';

// demos
import DashboardCongratulationJohn from './DashboardCongratulationJohn.vue';
</script>
