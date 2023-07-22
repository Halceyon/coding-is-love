<template>
  <component :is="resolveLayout">
    <router-view></router-view>
  </component>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from '@/utils';
import { useSystemTheme, useVuetify } from '@/use';
import LayoutBlank from '@/layouts/Blank.vue';
import LayoutContent from '@/layouts/Content.vue';

export default {
  components: {
    LayoutBlank,
    LayoutContent,
  },
  setup() {
    const { route } = useRouter();

    const resolveLayout = computed(() => {
      // Handles initial route
      if (route.value.name === null) return null;

      if (route.value.meta.layout === 'blank') return 'layout-blank';

      return 'layout-content';
    });

    const isDarkMode = useSystemTheme();

    const vuetify = useVuetify();

    // Set Vuetify theme to dark if isDarkMode
    if (isDarkMode) {
      vuetify.theme.dark = true;
    }

    return {
      resolveLayout,
    };
  },
};
</script>
