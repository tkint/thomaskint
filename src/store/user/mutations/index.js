import Types from './types';

export default {
  [Types.GET_USERS](state, users) {
    state.users = users;
  },
  [Types.GET_USER_BY_ID](state, user) {
    state.user = user;
  },
};
