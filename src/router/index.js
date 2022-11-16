import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/index.vue';
import Menu from '@/views/menu/index.vue';
import Items from '@/views/menu/category-items.vue';
import Catering from '@/views/catering/index.vue';
import PageNotFound from '@/views/page-not-found.vue';

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
