<template>
  <slot v-if="standalone">
  </slot>
  <div class="card" v-else>
    <div class="card-body">
      <div class="card-title">
        <router-link :to="`/blog/${articleId}`">
          <h3>{{ frontmatter.title }}</h3>
        </router-link>
      </div>
      <div class="text-muted">{{ frontmatter.subtitle }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'BlogWrapper',
  props: {
    articleId: String,
    standalone: Boolean,
    frontmatter: Object,
  },
  setup(props) {
    onMounted(() => {
    });

    return {
      props,
    };
  },
});
</script>

<style>
</style>
