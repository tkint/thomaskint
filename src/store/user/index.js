import Getters from './getters';
import Actions from './actions';
import Mutations from './mutations';

const UserStore = {
  state: {
    user: {
      id_user: null,
      email: null,
      password: null,
      pseudo: null,
      firstname: null,
      lastname: null,
      role: null,
    },
    users: null,
  },
  getters: Getters,
  actions: Actions,
  mutations: Mutations,
};

export default UserStore;
