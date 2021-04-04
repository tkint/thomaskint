<template>
  <app-navbar></app-navbar>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavbar from './components/layout/AppNavbar.vue';

export default defineComponent({
  name: 'App',
  components: { AppNavbar },
  setup() {
    return {};
  },
});
</script>

<style>
html, body, #app {
  height: 100%;
}

body {
  padding-top: 60px;
}
</style>
