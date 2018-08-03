import Types from './types';

export default {
  [Types.SET_USER](state, user) {
    state.user = user;
  },
};
