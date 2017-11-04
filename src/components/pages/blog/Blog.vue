<template>
  <v-layout>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          xl2
          v-for="(article, index) in articles"
          :key="index"
        >
          <article-item
            :article="article"
          ></article-item>
        </v-flex>
      </v-layout>
    </v-container>
    <article-dialog :article="article"></article-dialog>
  </v-layout>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import ActionTypes from '@/store/blog/actions/types';
  import ArticleDialog from './components/ArticleDialog';
  import ArticleItem from './components/ArticleItem';

  export default {
    name: 'Blog',
    components: { ArticleDialog, ArticleItem },
    data() {
      return {
        article: null,
      };
    },
    created() {
      this.openArticleFromUrl();
      this.getArticles();
    },
    computed: {
      ...mapState({
        articles: state => state.BlogStore.articles,
      }),
    },
    methods: {
      openArticleFromUrl() {
        if (this.$route.params.id) {
          this.article = this.getArticleById(this.$route.params.id);
        }
      },
      openArticle(article) {
        this.article = article;
      },
      getArticleById(id) {
        let i = 0;
        let article = null;
        while (i < this.articles.length && !article) {
          if (this.articles[i].id_article === parseInt(id, 10)) {
            article = this.articles[i];
          }
          i += 1;
        }
        return article;
      },
      ...mapActions({
        getArticles: ActionTypes.GET_ARTICLES,
      }),
    },
  };
</script>

<style scoped>
</style>
