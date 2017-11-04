import Types from './types';

export default {
  [Types.GET_ARTICLES](state, articles) {
    state.articles = articles;
  },
};
