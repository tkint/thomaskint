<template>
  <v-card
    class="article-item"
    @click.native="$parent.openArticle(article)"
    hover
    ripple
  >
    <v-card-media
      src="/static/img/material2.jpg"
      height="200px"
    >
    </v-card-media>
    <v-card-title>
      <div>
        <h3 class="headline mb-0">{{ article.title }}</h3>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
  export default {
    name: 'ArticleItem',
    props: ['article'],
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .article-item {
    cursor: pointer;
    /*margin: 0px 10px;*/
  }
</style>
