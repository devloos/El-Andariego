import { createRouter, createWebHashHistory } from 'vue-router';
import home from '@/views/home/index.vue';
import menu from '@/views/menu/index.vue';
import items from '@/views/menu/category-items.vue';
import contact from '@/views/contact/index.vue';
import news from '@/views/news/index.vue';
import platilloDetails from '@/components/platillos/index.vue';
import pageNotFound from '@/views/page-not-found.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/menu',
    name: 'menu',
    component: menu,
  },
  {
    path: '/menu/items/:item',
    name: 'items',
    component: items,
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact,
  },
  {
    path: '/news',
    name: 'news',
    component: news,
  },
  {
    path: '/platillo/:name',
    name: 'platillo-details',
    component: platilloDetails,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pageNotFound',
    component: pageNotFound,
  },
  {
    path: '/items/undefined',
    name: 'undefined',
    component: pageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
