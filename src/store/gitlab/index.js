import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export const keys = {
  USER: 'USER',
  PROJECTS: 'PROJECTS',
  USER_LAST_CALL: 'USER_LAST_CALL',
  PROJECTS_LAST_CALL: 'PROJECTS_LAST_CALL',
};

export default {
  state: {
    [keys.USER]: {},
    [keys.PROJECTS]: [],
    [keys.USER_LAST_CALL]: null,
    [keys.PROJECTS_LAST_CALL]: null,
  },
  actions,
  mutations,
  getters,
};
