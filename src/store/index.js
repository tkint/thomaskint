import Vue from 'vue';
import Vuex from 'vuex';
import TemplateStore from '@/components/template/store';
import UserStore from '@/store/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TemplateStore,
    UserStore,
  },
});
