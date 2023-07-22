import { ref } from 'vue';

const useSystemTheme = () => {
  const isDarkMode = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const updateTheme = event => {
    isDarkMode.value = event.matches;
  };
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);

  return isDarkMode;
};

export { useSystemTheme };
