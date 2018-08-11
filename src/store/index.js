import Vue from 'vue';
import Vuex from 'vuex';
import TemplateStore from '@/store/template';
import GitlabStore from '@/store/gitlab';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TemplateStore,
    GitlabStore,
  },
});
