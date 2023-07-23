<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold">GitHub Issues</span>
      <v-spacer></v-spacer>
      <v-btn
        icon
        small
        class="me-n3 mt-n2"
      >
        <v-icon>
          {{ mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle class="mb-8 mt-n5">
      <span class="font-weight-semibold text--primary me-1">Total {{ total }} issues</span>
      <span>😎</span>
    </v-card-subtitle>

    <v-card-text>
    </v-card-text>
  </v-card>
</template>

<script setup>
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical } from '@mdi/js';

</script>
