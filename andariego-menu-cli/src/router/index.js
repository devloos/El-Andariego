import { createRouter, createWebHashHistory } from 'vue-router';
import ItemsView from '../views/ItemsView.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/Burritos',
    name: 'Burritos',
    component: ItemsView,
  },
  {
    path: '/Tacos',
    name: 'Tacos',
    component: ItemsView,
  },
  {
    path: '/Tortas',
    name: 'Tortas',
    component: ItemsView,
  },
  {
    path: '/Sopes',
    name: 'Sopes',
    component: ItemsView,
  },
  {
    path: '/Gorditas',
    name: 'Gorditas',
    component: ItemsView,
  },
  {
    path: '/Huaraches',
    name: 'Huaraches',
    component: ItemsView,
  },
  {
    path: '/Nachos',
    name: 'Nachos',
    component: ItemsView,
  },
  {
    path: '/Quesadillas',
    name: 'Quesadillas',
    component: ItemsView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
