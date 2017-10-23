// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import Vuetify from 'vuetify';
import VueCookie from 'vue-cookie';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import VueScrollTo from 'vue-scrollto';

import App from './App';
import router from './router';

Vue.use(Vuetify);
Vue.use(VueCookie);
Vue.use(VueAxios, Axios);
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
