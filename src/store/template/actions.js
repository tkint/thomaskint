import { keys } from './';
import { types as MutationTypes } from './mutations';

export const types = {
  SWITCH_DRAWER: 'SWITCH_DRAWER',
  SWITCH_PROGRESSBAR: 'SWITCH_PROGRESSBAR',
  SET_PROGRESSBAR: 'SET_PROGRESSBAR',
};


export default {
  [types.SWITCH_DRAWER]({ commit }) {
    commit(MutationTypes.SWITCH_DRAWER);
  },
  [types.SWITCH_PROGRESSBAR]({ commit }) {
    commit(MutationTypes.SWITCH_PROGRESSBAR);
  },
  [types.SET_PROGRESSBAR]({ commit }, value) {
    commit(MutationTypes.SET_VALUE, { key: keys.PROGRESS_BAR, value });
  },
};
