<template>
  <component
      v-if="$frontmatter && $frontmatter.layout === 'SlideLayout'"
      is="SlideLayout">
  </component>
  <ParentGlobalLayout v-else></ParentGlobalLayout>
</template>

<script>
import ParentGlobalLayout from '@parent-theme/layouts/GlobalLayout.vue';

export default {
  components: {
    ParentGlobalLayout,
  },
};
</script>
