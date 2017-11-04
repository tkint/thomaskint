import Vue from 'vue';
import Vuex from 'vuex';
import ConfigStore from '@/store/config';
import TemplateStore from '@/store/template';
import UserStore from '@/store/user';
import BlogStore from '@/store/blog';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ConfigStore,
    TemplateStore,
    UserStore,
    BlogStore,
  },
});
