import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import VanillaCRUD from '../views/VanillaCRUD.vue';
import LocalThreadsDB from '../views/LocalThreadsDB.vue';

import RemoteThreadsDB from '../views/RemoteThreadsDB.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'VanillaCRUD',
    component: VanillaCRUD,
  },
  {
    path: '/VanillaCRUD',
    name: 'VanillaCRUD',
    component: VanillaCRUD,
  },
  {
    path: '/LocalThreadsDB',
    name: 'LocalThreadsDB',
    component: LocalThreadsDB,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;