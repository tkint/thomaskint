import Services from '@/services';
import Types from './types';
import MutationTypes from '../mutations/types';

export default {
  async [Types.GET_SETTINGS]({ commit }) {
    const settings = await Services.setting.getSettings();
    commit(MutationTypes.SET_COMING_SOON, settings);
    commit(MutationTypes.SET_COMING_SOON_TITLE, settings);
    commit(MutationTypes.SET_SITE_TITLE, settings);
    commit(MutationTypes.SET_EMAIL_ADRESS, settings);
    commit(MutationTypes.SET_GITHUB_URL, settings);
    commit(MutationTypes.SET_LINKEDIN_URL, settings);
  },
};
