import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Menu from '@/views/menu/Categories.vue';
import Items from '@/views/menu/Items.vue';
import Catering from '@/views/catering/Catering.vue';
import PageNotFound from '@/views/PageNotFound.vue';

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
    path: '/menu/items/:item',
    name: 'Items',
    component: Items,
  },
  {
    path: '/catering',
    name: 'Catering',
    component: Catering,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
  {
    path: '/items/undefined',
    name: 'Undefined',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
