import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Markdown, { Mode } from 'vite-plugin-markdown';

export default defineConfig({
    plugins: [
        Vue({}),
        Markdown({
            mode: [Mode.VUE, Mode.HTML, Mode.TOC],
        }),
    ],
});
