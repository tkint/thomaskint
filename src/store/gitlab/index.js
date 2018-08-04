import { actions } from './actions';
import Mutations from './mutations';

const TemplateStore = {
  state: {
    user: {},
  },
  actions,
  mutations: Mutations,
};

export default TemplateStore;
