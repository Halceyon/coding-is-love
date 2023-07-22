import { getCurrentInstance } from 'vue';

const useVuetify = () => {
  const vm = getCurrentInstance().proxy;

  return vm.$vuetify;
};

export { useVuetify };
