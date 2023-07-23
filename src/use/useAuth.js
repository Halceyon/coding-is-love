import { getCurrentInstance } from 'vue';

const useAuth = () => {
  const vm = getCurrentInstance().proxy;

  return vm.$auth;
};

export { useAuth };
