// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import VueCookie from 'vue-cookie';
import VueScrollTo from 'vue-scrollto';

import store from './store';
import GlobalPlugin from './plugins/global';

import App from './App';
import router from './router';

Vue.use(Vuetify, {
  iconfont: 'fa',
});
Vue.use(VueCookie);
Vue.use(VueScrollTo);
Vue.use(GlobalPlugin, { router });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
