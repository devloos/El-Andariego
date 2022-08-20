import { createRouter, createWebHashHistory } from 'vue-router';
import Items from '../views/Items.vue';
import Home from '../views/Categories.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/Burritos',
    name: 'Burritos',
    component: Items,
  },
  {
    path: '/Tacos',
    name: 'Tacos',
    component: Items,
  },
  {
    path: '/Tortas',
    name: 'Tortas',
    component: Items,
  },
  {
    path: '/Sopes',
    name: 'Sopes',
    component: Items,
  },
  {
    path: '/Gorditas',
    name: 'Gorditas',
    component: Items,
  },
  {
    path: '/Huaraches',
    name: 'Huaraches',
    component: Items,
  },
  {
    path: '/Nachos',
    name: 'Nachos',
    component: Items,
  },
  {
    path: '/Quesadillas',
    name: 'Quesadillas',
    component: Items,
  },
  {
    path: '/Platillos',
    name: 'Platillos',
    component: Items,
  },
  {
    path: '/Kids',
    name: 'Kids',
    component: Items,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
