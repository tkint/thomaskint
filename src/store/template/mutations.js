export const types = {
  SWITCH_DRAWER: 'SWITCH_DRAWER',
  SWITCH_PROGRESSBAR: 'SWITCH_PROGRESSBAR',
  SET_VALUE: 'SET_VALUE',
};


export default {
  [types.SWITCH_DRAWER](state) {
    state.drawer = !state.drawer;
  },
  [types.SWITCH_PROGRESSBAR](state) {
    state.progressBar = !state.progressBar;
  },
  [types.SET_VALUE](state, { key, value }) {
    if (state[key] !== undefined) {
      state[key] = value;
    }
  },
};
