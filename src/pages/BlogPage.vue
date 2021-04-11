<template>
  <div class="container">
    <h1>Blog</h1>
    <h6>Etudes et articles en tout genre (sur l'IT)</h6>
    <div class="row flex-column">
      <div
          class="col mb-2"
          v-for="(article, index) in articles"
          :key="`article-${index}`">
        <div class="card item-card">
          <div class="card-body">
            <div class="card-title">
              <router-link :to="`/blog/${article.filename}`">
                <h3>{{ article.title }}</h3>
              </router-link>
            </div>
            <div class="text-muted">{{ article.subtitle }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { articles } from '../data';

export default defineComponent({
  name: 'BlogPage',
  setup() {
    return { articles };
  },
});
</script>

<style scoped>
</style>
