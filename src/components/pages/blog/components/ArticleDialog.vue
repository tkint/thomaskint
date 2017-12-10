<template>
  <v-dialog
    v-model="show"
    max-width="60%"
    scrollable
    id="article-dialog"
  >
    <v-card v-if="article">
      <v-card-media
        height="200px"
        src="/static/img/material2.jpg"
      >
        <v-container fluid>
          <v-layout row wrap>
            <v-btn
              fab
              dark
              small
              color="primary"
            >
              <v-icon>{{ $global.icons.SHARE }}</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <h3>{{ article.title }}</h3>
            <v-spacer></v-spacer>
            <v-btn
              fab
              dark
              small
              color="red"
              @click.stop="show = false"
            >
              <v-icon>{{ $global.icons.CLOSE }}</v-icon>
            </v-btn>
          </v-layout>
        </v-container>
      </v-card-media>
      <v-card-text>{{ article.content }}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import RouteNames from '@/router/names';

  export default {
    name: 'ArticleDialog',
    props: ['article'],
    data() {
      return {
        RouteNames,
      };
    },
    computed: {
      show: {
        get() {
          return this.article !== null;
        },
        set() {
          this.$parent.article = null;
        },
      },
    },
    methods: {
      closeArticle() {
        this.$parent.article = null;
        if (this.$route.params.id) {
          this.$router.push({ name: RouteNames.BLOG });
        }
      },
    },
  };
</script>

<style scoped>
  h3 {
    height: 100%;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    font-variant: small-caps;
    text-shadow: 1px 1px 1px #000;
  }
</style>
