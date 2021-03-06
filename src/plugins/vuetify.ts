import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import i18n from './i18n';

import '@fontsource/noto-sans-jp';
import '@mdi/font/scss/materialdesignicons.scss';
Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
});
