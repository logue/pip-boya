/**
 * Fallout76 Pip-boy Application (Pip-BoyA／Pip坊や)
 *
 * @author    Logue <logue@hotmail.co.jp>
 * @version   0.4.2
 * @copyright 2020 Masashi Yoshikawa <https://logue.dev/> All rights reserved.
 * @license   MIT
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './plugins/analytics';
import './plugins/axios';
import './plugins/clipboard';
import './plugins/electron';
import './plugins/vuelayers';
import './plugins/worker';
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  i18n,
  store,
  render: (h) => h(App),
}).$mount('#app');
