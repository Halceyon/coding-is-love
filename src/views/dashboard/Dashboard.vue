<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
    >
      <Tasks />
    </v-col>
  </v-row>
</template>

<script>
import Tasks from '@/components/Tasks.vue';

export default {
  components: {
    Tasks,
  },
};
</script>
