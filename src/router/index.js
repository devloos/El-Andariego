import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/views/Home.vue');
const Menu = () => import('@/views/Menu.vue');
const Contact = () => import('@/views/Contact.vue');
const Blog = () => import('@/views/Blog.vue');
const Post = () => import('@/views/Post.vue');
const PlatilloDetails = () => import('@/views/PlatilloDetails.vue');
const Error = () => import('@/views/Error.vue');

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/menu',
    redirect: '/menu/Platillos',
  },
  {
    path: '/menu/:category',
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
