import Vue from 'vue';
import Vuex from 'vuex';
import TemplateStore from '@/store/template';
import BlogStore from '@/store/blog';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TemplateStore,
    BlogStore,
  },
});
