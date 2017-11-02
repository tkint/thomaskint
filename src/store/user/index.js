import Getters from './getters';

const UserStore = {
  state: {
    user: {
      id_user: 0,
      email: null,
      password: null,
      pseudo: null,
      admin: false,
    },
  },
  getters: Getters,
};

export default UserStore;
