import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './app.vue';
import router from './router';
import mixins from '@/mixins/index';
import Toast from 'vue-toastification';
import '@/assets/scss/styles.scss';
import 'bootstrap';
import 'vue-toastification/dist/index.css';
import '@/assets/vue-toast-override.css';

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
app.mixin(mixins);

app.mount('#app');
