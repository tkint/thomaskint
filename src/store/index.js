import Vue from 'vue';
import Vuex from 'vuex';
import SettingStore from '@/store/setting';
import TemplateStore from '@/store/template';
import UserStore from '@/store/user';
import BlogStore from '@/store/blog';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    SettingStore,
    TemplateStore,
    UserStore,
    BlogStore,
  },
});
