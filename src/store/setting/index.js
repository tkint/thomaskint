import Names from './names';
import Getters from './getters';
import Actions from './actions';
import Mutations from './mutations';

const SettingStore = {
  state: {
    [Names.COMING_SOON]: null,
  },
  getters: Getters,
  actions: Actions,
  mutations: Mutations,
};

export default SettingStore;
