import MutationTypes from '../mutations/types';
import GitlabService from '../../../services/gitlabService';

export const types = {
  RETRIEVE_USER: 'RETRIEVE_USER',
};

export const actions = {
  [types.RETRIEVE_USER]({ commit }) {
    commit(MutationTypes.SET_USER, GitlabService.getUser());
  },
};

