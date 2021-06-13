<template>
  <div v-if="article" class="container">
    <h1>{{ article.title }}</h1>
    <h6>{{ article.subtitle }}</h6>

    <div class="small font-italic">Publié le {{ publicationDate }}</div>

    <hr class="bg-primary">

    <!--    <div v-for="(item, index) in toc" :key="`toc-item-${index}`" :class="`ps-${item.level}`">-->
    <!--      {{ item.content }}-->
    <!--    </div>-->

    <!--    <hr class="bg-primary">-->

    <component :is="markdownComponent"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { articles } from '@/data';

export default defineComponent({
  name: 'BlogPostPage',
  props: {
    filename: String,
  },
  setup(props) {
    const publicationDate = ref('');
    let markdownComponent: any = null;
    let toc: { level: string, content: string }[] = null;

    const article = articles.find(a => a.filename === props.filename);

    if (article) {
      markdownComponent = article.component;
      toc = article.toc;

      if (article.createDate) {
        publicationDate.value = article.createDate.format('DD/MM/YYYY');
      }
    }

    return {
      article,
      publicationDate,
      markdownComponent,
      toc,
    };
  },
});
</script>

<style scoped>
</style>
