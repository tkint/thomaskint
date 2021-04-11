<template>
  <div style="height: 100%; width: 100%; position: absolute;">
    <div class="reveal">
      <div class="slides">
        <section
            :data-markdown="filePath"
            data-separator="^<!--hslide-->"
            data-separator-vertical="^<!--vslide-->"
            data-separator-notes="^Note:">
        </section>
      </div>
    </div>
    <a href="/presentation" class="floating-btn">
      <i class="fas fa-times icon"></i>
    </a>
  </div>
</template>

<script lang="ts">
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import 'reveal.js/plugin/highlight/zenburn.css';

import '@fortawesome/fontawesome-free/js/solid.min';
import '@fortawesome/fontawesome-free/js/fontawesome.min';

import { computed, defineComponent, onMounted } from 'vue';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealNotes from 'reveal.js/plugin/notes/notes';

export default defineComponent({
  props: {
    directory: String,
  },
  setup(props) {
    const basePath = computed(() => `/assets/slides/${props.directory}/`);
    const filePath = computed(() => `${basePath.value}index.md`);

    onMounted(() => {
      Reveal.initialize({
        plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
        hash: true,
        transition: 'convex',
        markdown: {
          baseUrl: basePath.value,
        },
      });
    });

    return { filePath };
  },
});
</script>

<style scoped>
.floating-btn {
  position: fixed;
  width: 60px;
  height: 60px;
  top: 10px;
  right: 10px;
  color: rgba(255, 255, 255, 0);
  border-radius: 50px;
  text-align: center;
  transition: 0.5s ease;
}

.floating-btn:hover {
  color: #EEA73B;
}

.floating-btn > .icon {
  margin-top: 14px;
  font-size: 32px;
}

h2 {
  border-bottom: unset !important;
  padding-bottom: unset !important;
}

tr {
  border-top: unset !important;
}

tr:nth-child(2n) {
  background: unset !important;
}
</style>
