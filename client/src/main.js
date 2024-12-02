/* global  __VITE_APP_VERSION__ */
import { createApp } from 'vue';
import { createHead } from '@unhead/vue';
import { createI18n } from 'vue-i18n';
import { register } from 'swiper/element/bundle';

import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';
import en from '@/locales/en.js';
import es from '@/locales/es.js';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';
import InfoIcon from '@/components/svgs/InfoIcon.vue';
import SuccessIcon from '@/components/svgs/SuccessIcon.vue';
import WarningIcon from '@/components/svgs/WarningIcon.vue';
import ErrorIcon from '@/components/svgs/ErrorIcon.vue';
import FoodIcon from '@/components/svgs/FoodIcon.vue';
import PlateIcon from '@/components/svgs/PlateIcon.vue';

import '@/assets/index.css';
import 'vue-toastification/dist/index.css';
import '@/assets/overrides.css';

localStorage.setItem('version', __VITE_APP_VERSION__);

const app = createApp(App);
const head = createHead();
const i18n = createI18n({
  locale: 'en',
  legacy: false,
  fallbackLocale: 'es',
  messages: {
    en,
    es,
  },
});

register();

app.use(Toast, {
  maxToasts: 1,
  filterBeforeCreate: (toast, toasts) => {
    // dont allow for duplicate toasts
    if (toasts.filter((t) => t.type === toast.type).length !== 0) {
      return false;
    }
    return toast;
  },
});

app.use(router);
app.use(head);
app.use(i18n);

app
  .component('DefaultLayout', DefaultLayout)
  .component('BlankLayout', BlankLayout)
  .component('InfoIcon', InfoIcon)
  .component('SuccessIcon', SuccessIcon)
  .component('WarningIcon', WarningIcon)
  .component('ErrorIcon', ErrorIcon)
  .component('FoodIcon', FoodIcon)
  .component('PlateIcon', PlateIcon);

router.isReady().then(() => {
  app.mount('#app');
});
