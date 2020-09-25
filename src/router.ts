import EventsList from '@/views/EventsList.vue';
import FavoritesList from '@/views/FavoritesList.vue';
import VueRouter from 'vue-router';
import Vue from 'vue';
import { EVENTS_PATH, FAVORITES_PATH } from '@/utils/constants';

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
    path: '/',
    redirect: EVENTS_PATH
  },
  {
    path: '*',
    redirect: EVENTS_PATH
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
