import Types from './types';
import Names from '../names';

export default {
  [Types.GET_COMING_SOON](state) {
    return state[Names.COMING_SOON] && state[Names.COMING_SOON].current_value === 'true';
  },
};
