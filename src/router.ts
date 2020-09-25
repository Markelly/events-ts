import EventsList from '@/views/EventsList.vue';
import FavoritesList from '@/views/FavoritesList.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import VueRouter from 'vue-router';
import Vue from 'vue';
import {
  EVENTS_PATH,
  FAVORITES_PATH,
  LOGIN_PATH,
  REGISTER_PATH
} from '@/utils/constants';

Vue.use(VueRouter);

const routes = [
  {
    path: EVENTS_PATH,
    name: 'events',
    component: EventsList
  },
  {
    path: FAVORITES_PATH,
    name: 'favorites',
    component: FavoritesList
  },
  {
    path: REGISTER_PATH,
    name: 'register',
    component: Register
  },
  {
    path: LOGIN_PATH,
    name: 'login',
    component: Login
  },
  {
    path: '/',
    redirect: LOGIN_PATH
  },
  {
    path: '*',
    redirect: LOGIN_PATH
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
