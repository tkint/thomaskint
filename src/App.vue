<template>
  <app-navbar v-if="showNavbar"></app-navbar>
  <div :style="showNavbar ? 'margin-top: 60px' : ''">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import AppNavbar from './components/layout/AppNavbar.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: { AppNavbar },
  setup() {
    const route = useRoute();

    const showNavbar = computed(() => {
      return !route.meta.hideNavbar;
    });

    return { showNavbar };
  },
});
</script>

<style>
html, body, #app {
  height: 100%;
}
</style>
