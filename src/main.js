import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';
import '@/assets/css/styles.css';
import 'vue-toastification/dist/index.css';
import '@/assets/css/vue-toast-override.css';

const app = createApp(App);
const head = createHead();

const toastOptions = {
  maxToasts: 1,
  // dont allow for duplicate toasts
  filterBeforeCreate: (toast, toasts) => {
    if (toasts.filter((t) => t.type === toast.type).length !== 0) {
      return false;
    }
    return toast;
  },
};

app.use(Toast, toastOptions);

app.use(router);
app.use(head);

app.mount('#app');
