// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import Icon from '@/components/common/Icon';
import ProgressBar from '@/components/common/ProgressBar';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import VueCookie from 'vue-cookie';
import VueScrollTo from 'vue-scrollto';

import store from './store';
import GlobalPlugin from './plugins/global';

import App from './App';
import router from './router';

Vue.use(Vuetify);
Vue.use(VueCookie);
Vue.use(VueScrollTo);
Vue.use(GlobalPlugin, { router });

Vue.component('icon', Icon);
Vue.component('progress-bar', ProgressBar);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
