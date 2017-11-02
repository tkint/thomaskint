import Vue from 'vue';
import Vuex from 'vuex';
import TemplateStore from '@/components/template/store';
import ConfigStore from '@/store/config';
import UserStore from '@/store/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TemplateStore,
    ConfigStore,
    UserStore,
  },
});
