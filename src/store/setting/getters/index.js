import Types from './types';
import Names from '../names';

export default {
  [Types.GET_COMING_SOON](state) {
    return state[Names.COMING_SOON] && state[Names.COMING_SOON].current_value === 'true';
  },
  [Types.GET_SITE_TITLE](state) {
    if (state[Names.SITE_TITLE]) {
      return state[Names.SITE_TITLE].current_value;
    }
    return null;
  },
};
