import Types from './types';
import MutationTypes from '../mutations/types';

import GitlabService from '../../../services/gitlabService';

export default {
  [Types.RETRIEVE_USER]({ commit }) {
    commit(MutationTypes.SET_USER, GitlabService.getUser());
  },
};
