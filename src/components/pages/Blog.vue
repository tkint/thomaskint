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
  import ArticleDialog from '@/components/blog/ArticleDialog';
  import ArticleItem from '@/components/blog/ArticleItem';

  export default {
    name: 'Home',
    components: { ArticleDialog, ArticleItem },
    data() {
      return {
        article: null,
        articles: [
          {
            id_article: 1,
            title: 'First Article',
          },
          {
            id_article: 2,
            title: 'Second Article',
          },
          {
            id_article: 3,
            title: 'Third Article',
          },
          {
            id_article: 4,
            title: 'Fourth Article',
          },
          {
            id_article: 5,
            title: 'Fifth Article',
          },
        ],
        showArticle: true,
      };
    },
    created() {
      this.openArticleFromUrl();
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
    },
  };
</script>

<style scoped>
</style>
