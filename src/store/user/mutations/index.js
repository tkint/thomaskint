import Types from './types';

export default {
  [Types.SET_USERS](state, users) {
    state.users = users;
  },
  [Types.SET_USER](state, user) {
    state.user = user;
  },
  [Types.UPDATE_USER_EMAIL](state, email) {
    state.user.email = email;
  },
  [Types.UPDATE_USER_PASSWORD](state, password) {
    state.user.password = password;
  },
};
