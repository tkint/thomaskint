import Service from '@/services';
import Types from './types';
import MutationTypes from '../mutations/types';

export default {
  async [Types.GET_ARTICLES]({ commit }) {
    const articles = await Service.article.getArticles();
    commit(MutationTypes.GET_ARTICLES, articles);
  },
};
