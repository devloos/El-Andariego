import { createRouter, createWebHistory } from 'vue-router';

const Homepage = () => import('@/views/homepage/Homepage.vue');
const Menu = () => import('@/views/Menu.vue');
const Contact = () => import('@/views/Contact.vue');
const Blog = () => import('@/views/Blog.vue');
const Post = () => import('@/views/Post.vue');
const PageNotFound = () => import('@/views/PageNotFound.vue');

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {
    path: '/menu',
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
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    meta: {
      layout: 'BlankLayout',
    },
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        resolve(savedPosition);
      } else if (to.hash) {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 80,
          });
        }, 800);
      } else {
        resolve({ left: 0, top: 0 });
      }
    });
  },
});

export default router;
