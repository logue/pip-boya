import Vue from 'vue';
import VueAnalytics, {set} from 'vue-analytics';
import router from '../router';

Vue.use(VueAnalytics, {
  id: 'UA-11445748-24',
  router,
  // debug: {
  //   enabled: true,
  //   trace: true // help you find problems
  // },
  fields: {
    cookieDomain: 'none', // no domain
  },
  autoTracking: {
    pageviewTemplate(route) {
      // allow custom page titles in the router meta
      return {
        page: route.params.category || route.name,
        title: document.title,
        location: route.path,
      };
    },
  },
});
set('allowAdFeatures', false); // no ads
set('checkProtocolTask', null); // ignore electron protocols
set('checkStorageTask', null); // ignore electrons cache solution, assume it works
