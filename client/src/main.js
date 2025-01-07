/* global  __VITE_APP_VERSION__ */
import { createApp } from 'vue';
import { createHead } from '@unhead/vue';
import { createI18n } from 'vue-i18n';
import { register } from 'swiper/element/bundle';

import App from './App.vue';
import router from './router';
import en from '@/locales/en.js';
import es from '@/locales/es.js';
import InfoIcon from '@/components/svgs/InfoIcon.vue';
import SuccessIcon from '@/components/svgs/SuccessIcon.vue';
import WarningIcon from '@/components/svgs/WarningIcon.vue';
import ErrorIcon from '@/components/svgs/ErrorIcon.vue';
import FoodIcon from '@/components/svgs/FoodIcon.vue';
import PlateIcon from '@/components/svgs/PlateIcon.vue';
import SearchIcon from '@/components/svgs/SearchIcon.vue';
import XIcon from '@/components/svgs/XIcon.vue';

import '@/assets/index.css';

localStorage.setItem('version', __VITE_APP_VERSION__);

const app = createApp(App);
const head = createHead();
const i18n = createI18n({
  locale: 'en',
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
});

register();

app.use(router);
app.use(head);
app.use(i18n);

app
  .component('InfoIcon', InfoIcon)
  .component('SuccessIcon', SuccessIcon)
  .component('WarningIcon', WarningIcon)
  .component('ErrorIcon', ErrorIcon)
  .component('FoodIcon', FoodIcon)
  .component('PlateIcon', PlateIcon)
  .component('SearchIcon', SearchIcon)
  .component('XIcon', XIcon);

router.isReady().then(() => {
  app.mount('#app');
});
