import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';
import en from '@/locales/en.js';
import es from '@/locales/es.js';
import '@/assets/css/styles.css';
import 'vue-toastification/dist/index.css';
import '@/assets/css/vue-toast-override.css';

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

app.mount('#app');
