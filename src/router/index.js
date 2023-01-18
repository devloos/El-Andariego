import { createRouter, createWebHashHistory } from 'vue-router';
import home from '@/views/home/index.vue';
import menu from '@/views/menu/index.vue';
import contact from '@/views/contact/index.vue';
import blog from '@/views/blog/index.vue';
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
    redirect: '/menu/Platillos',
  },
  {
    path: '/menu/:category',
    name: 'menu',
    component: menu,
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact,
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog,
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
