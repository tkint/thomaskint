<template>
  <div class="container" v-if="currentArticle">
    <component
        standalone
        :article-id="currentArticle.id"
        :is="currentArticle.component">
    </component>
  </div>
  <div class="container" v-else>
    <h1>Blog</h1>
    <h6>Etudes et articles en tout genre (sur l'IT)</h6>
    <div class="row flex-column">
      <div
          class="col mb-2"
          :key="`article-${index}`"
          v-for="(article, index) in articles">
        <component
            :article-id="article.id"
            :is="article.component">
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import articles from '../blog';

export default defineComponent({
  name: 'BlogPage',
  props: {
    articleId: String,
  },
  setup(props) {
    return {
      currentArticle: computed(() => articles.find((article) => article.id === props.articleId)),
      articles,
    };
  },
});
</script>
