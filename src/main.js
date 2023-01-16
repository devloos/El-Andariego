import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import mixins from '@/mixins/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.mixin(mixins);

app.mount('#app');
