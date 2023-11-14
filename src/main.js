import { createApp } from 'vue';
import { createHead } from '@unhead/vue';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';
import en from '@/locales/en.js';
import es from '@/locales/es.js';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';
import InfoIcon from '@/components/svgs/icons/InfoIcon.vue';
import SuccessIcon from '@/components/svgs/icons/SuccessIcon.vue';
import WarningIcon from '@/components/svgs/icons/WarningIcon.vue';
import ErrorIcon from '@/components/svgs/icons/ErrorIcon.vue';

import '@/assets/index.css';
import 'vue-toastification/dist/index.css';
import '@/assets/overrides.css';

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
  .component('ErrorIcon', ErrorIcon);

router.isReady().then(() => {
  app.mount('#app');
});
