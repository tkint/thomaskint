import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import markdown, { Mode } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    vue(),
    markdown({
      mode: [Mode.VUE, Mode.HTML, Mode.TOC],
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    watch: {
      ignored: '.npm/**',
    },
  },
});
