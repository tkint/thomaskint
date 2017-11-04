import Service from '@/services';
import Types from './types';
import MutationTypes from '../mutations/types';

export default {
  async [Types.GET_USERS]({ commit }) {
    const users = await Service.user.getUsers();
    commit(MutationTypes.GET_USERS, users);
  },
  async [Types.GET_USER_BY_ID]({ commit }, id) {
    const user = await Service.user.getUserByIdUser(id);
    commit(MutationTypes.GET_USER_BY_ID, user);
  },
};
