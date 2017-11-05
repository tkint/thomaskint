import Names from './names';
import Getters from './getters';
import Actions from './actions';
import Mutations from './mutations';

const SettingStore = {
  state: {
    [Names.COMING_SOON]: null,
    [Names.COMING_SOON_TITLE]: null,
    [Names.SITE_TITLE]: null,
    [Names.EMAIL_ADRESS]: null,
    [Names.GITHUB_URL]: null,
    [Names.LINKEDIN_URL]: null,
  },
  getters: Getters,
  actions: Actions,
  mutations: Mutations,
};

export default SettingStore;
