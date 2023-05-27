import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Menu from '@/views/Menu.vue';
import Contact from '@/views/Contact.vue';
import Blog from '@/views/Blog.vue';
import Post from '@/views/Post.vue';
import PlatilloDetails from '@/views/PlatilloDetails.vue';
import Error from '@/views/Error.vue';

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
    name: 'Contact',
    component: Contact,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
