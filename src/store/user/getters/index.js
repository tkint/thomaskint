import Types from './types';

export default {
  [Types.IS_CONNECTED](state) {
    return state.user && state.user.id_user !== null;
  },
  [Types.IS_ADMIN](state) {
    return [Types.IS_CONNECTED] && state.user.role === 'Admin';
  },
};
