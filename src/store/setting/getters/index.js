import Types from './types';
import Names from '../names';

export default {
  [Types.GET_COMING_SOON](state) {
    return state[Names.COMING_SOON] && state[Names.COMING_SOON].current_value === 'true';
  },
  [Types.GET_COMING_SOON_TITLE](state) {
    if (state[Names.COMING_SOON_TITLE]) {
      return state[Names.COMING_SOON_TITLE].current_value;
    }
    return null;
  },
  [Types.GET_SITE_TITLE](state) {
    if (state[Names.SITE_TITLE]) {
      return state[Names.SITE_TITLE].current_value;
    }
    return null;
  },
  [Types.GET_EMAIL_ADRESS](state) {
    if (state[Names.EMAIL_ADRESS]) {
      return state[Names.EMAIL_ADRESS].current_value;
    }
    return null;
  },
  [Types.GET_GITHUB_URL](state) {
    if (state[Names.GITHUB_URL]) {
      return state[Names.GITHUB_URL].current_value;
    }
    return null;
  },
  [Types.GET_LINKEDIN_URL](state) {
    if (state[Names.LINKEDIN_URL]) {
      return state[Names.LINKEDIN_URL].current_value;
    }
    return null;
  },
};
