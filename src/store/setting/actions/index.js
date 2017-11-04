import Services from '@/services';
import Types from './types';
import MutationTypes from '../mutations/types';

export default {
  async [Types.GET_SETTINGS]({ commit }) {
    const settings = await Services.setting.getSettings();
    commit(MutationTypes.SET_COMING_SOON, settings);
  },
};
