import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import markdown, { Mode } from 'vite-plugin-markdown';
import highlight from 'highlight.js';

export default defineConfig({
  plugins: [
    vue(),
    markdown({
      mode: [Mode.VUE, Mode.HTML, Mode.TOC],
      markdownIt: {
        highlight: (str: string, lang: string) => {
          let content = str;
          if (lang && highlight.getLanguage(lang)) {
            try {
              content = highlight.highlight(str, { language: lang }).value;
            } catch (_) {
            }
          }
          return `<pre class="hljs"><code>${content}</code></pre>`;
        },
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
