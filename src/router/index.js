import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Menu from '../views/Menu.vue';
import Items from '../views/Items.vue';
import Catering from '../views/Catering.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/items/:item',
    name: 'Items',
    component: Items,
  },
  {
    path: '/catering',
    name: 'Catering',
    component: Catering,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
