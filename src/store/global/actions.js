import { types as MutationTypes } from './mutations';

export const types = {
  SET_GLOBAL_VALUE: 'SET_GLOBAL_VALUE',
};


export default {
  [types.SET_GLOBAL_VALUE]({ commit }, { key, value }) {
    commit(MutationTypes.SET_GLOBAL_VALUE, { key, value });
  },
};
