import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import mixins from '@/mixins/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import '@/assets/vue-toast-override.css';

const app = createApp(App);
const head = createHead();

const toastOptions = {
  maxToasts: 1,
  filterBeforeCreate: (toast, toasts) => {
    if (toasts.filter((t) => t.type === toast.type).length !== 0) {
      // Returning false discards the toast
      return false;
    }
    // You can modify the toast if you want
    return toast;
  },
};

app.use(Toast, toastOptions);

app.use(router);
app.use(head);
app.mixin(mixins);

app.mount('#app');
