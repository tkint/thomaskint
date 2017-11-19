import Service from '@/services';
import Types from './types';
import MutationTypes from '../mutations/types';

export default {
  async [Types.GET_USERS]({ commit }) {
    const users = await Service.user.getUsers();
    commit(MutationTypes.SET_USERS, users);
  },
  async [Types.GET_USER_BY_ID]({ commit }, id) {
    const user = await Service.user.getUserByIdUser(id);
    commit(MutationTypes.SET_USER, user);
  },
  async [Types.SIGNIN]({ commit }, user) {
    const newUser = await Service.user.signin(user);
    commit(MutationTypes.SET_USER, newUser);
    return newUser;
  },
  async [Types.SIGNOUT]({ commit }) {
    const user = {
      id_user: null,
      email: null,
      password: null,
      pseudo: null,
      firstname: null,
      lastname: null,
      role: null,
    };
    commit(MutationTypes.SET_USER, user);
  },
};
