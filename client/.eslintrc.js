export default {
  root: true,
  env: {
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};
