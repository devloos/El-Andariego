import { createRouter, createWebHashHistory } from 'vue-router';
import home from '@/views/home/index.vue';
import menu from '@/views/menu/index.vue';
import contact from '@/views/contact/index.vue';
import blog from '@/views/blog.vue';
import post from '@/components/post.vue';
import PlatilloDetails from '@/components/platillo-details.vue';
import error from '@/views/error.vue';

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
    path: '/blog/:id',
    name: 'post',
    component: post,
    props: true,
  },
  {
    path: '/platillo/:name',
    name: 'platillo-details',
    component: PlatilloDetails,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: error,
  },
  {
    path: '/items/undefined',
    name: 'undefined',
    component: error,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
