import Types from './types';

export default {
  [Types.SET_USERS](state, users) {
    state.users = users;
  },
  [Types.SET_USER](state, user) {
    if (user && user.id_user) {
      state.user = user;
    }
  },
  [Types.RESET_USER](state) {
    state.user = {
      id_user: null,
      email: null,
      password: null,
      pseudo: null,
      firstname: null,
      lastname: null,
      role: null,
    };
  },
  [Types.UPDATE_USER_EMAIL](state, email) {
    state.user.email = email;
  },
  [Types.UPDATE_USER_PASSWORD](state, password) {
    state.user.password = password;
  },
  [Types.UPDATE_USER_PSEUDO](state, pseudo) {
    state.user.pseudo = pseudo;
  },
  [Types.UPDATE_USER_FIRSTNAME](state, firstname) {
    state.user.firstname = firstname;
  },
  [Types.UPDATE_USER_LASTNAME](state, lastname) {
    state.user.lastname = lastname;
  },
};
