import Vue from 'vue';
import VueRouter from 'vue-router';

import goTo from 'vuetify/es5/services/goto';

import Home from '@/views/Home.vue';
import NuclearWinter from '@/views/NuclearWinter.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/resource',
    redirect: '/headpoint',
  },
  {
    path: '/nuclear-winter',
    name: 'NuclearWinter',
    component: NuclearWinter,
  },
  {
    path: '/:category',
    name: 'Category',
    component: Home,
  },
];

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
  routes,
});

export default router;
