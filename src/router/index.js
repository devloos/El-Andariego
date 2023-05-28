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
    component: Home,
  },
  {
    path: '/menu',
    component: Menu,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/blog',
    component: Blog,
  },
  {
    path: '/blog/:id',
    component: Post,
    props: true,
  },
  {
    path: '/platillo/:name',
    component: PlatilloDetails,
  },
  {
    path: '/:pathMatch(.*)*',
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
