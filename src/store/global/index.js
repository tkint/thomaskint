import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export const keys = {
  PROJECT_SEARCH: 'PROJECT_SEARCH',
};

export default {
  state: {
    [keys.PROJECT_SEARCH]: null,
  },
  actions,
  mutations,
  getters,
};
