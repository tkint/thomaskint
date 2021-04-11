<template>
  <div class="container" v-if="article">
    <h1>{{ article.title }}</h1>
    <h6>{{ article.subtitle }}</h6>

    <div class="small font-italic">Publié le {{ publicationDate }}</div>

    <hr class="bg-primary">

    <component :is="markdownComponent"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { articles } from '../data';

export default defineComponent({
  name: 'BlogPostPage',
  props: {
    filename: String,
  },
  setup(props) {
    const publicationDate = ref('');
    let markdownComponent: any = null;

    const article = articles.find(a => a.filename === props.filename);

    if (article) {
      markdownComponent = article.component;

      if (article.createDate) {
        publicationDate.value = article.createDate.format('DD/MM/yyyy');
      }
    }

    return {
      article,
      publicationDate,
      markdownComponent,
    };
  },
});
</script>

<style scoped>
</style>
