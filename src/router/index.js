import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/home.vue';
import Menu from '@/views/menu.vue';
import contact from '@/views/contact.vue';
import Blog from '@/views/blog.vue';
import Post from '@/views/post.vue';
import PlatilloDetails from '@/views/platillo-details.vue';
import Error from '@/views/error.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/menu',
    redirect: '/menu/Platillos',
  },
  {
    path: '/menu/:category',
    name: 'Menu',
    component: Menu,
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/blog/:id',
    name: 'Post',
    component: Post,
    props: true,
  },
  {
    path: '/platillo/:name',
    name: 'PlatilloDetails',
    component: PlatilloDetails,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Error,
  },
  {
    path: '/items/undefined',
    name: 'undefined',
    component: Error,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
