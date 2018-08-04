import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export const keys = {
  PROGRESS_BAR: 'PROGRESS_BAR',
};

export default {
  state: {
    [keys.PROGRESS_BAR]: false,
  },
  actions,
  mutations,
  getters,
};
