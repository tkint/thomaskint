import Getters from './getters';
import Actions from './actions';
import Mutations from './mutations';

const UserStore = {
  state: {
    user: null,
    users: null,
  },
  getters: Getters,
  actions: Actions,
  mutations: Mutations,
};

export default UserStore;
