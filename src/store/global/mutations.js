export const types = {
  SET_GLOBAL_VALUE: 'SET_GLOBAL_VALUE',
};


export default {
  [types.SET_GLOBAL_VALUE](state, { key, value }) {
    if (state[key] !== undefined) {
      state[key] = value;
    }
  },
};
