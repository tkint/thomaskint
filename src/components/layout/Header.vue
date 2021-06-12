<template>
  <nav class="navbar navbar-expand navbar-dark fixed-top d-inline-block bg-secondary">
    <ul class="navbar-nav justify-content-center">
      <li v-for="(route, index) in routes" :key="`route-${index}`" class="nav-item">
        <router-link
          class="nav-link text-uppercase font-weight-bold"
          active-class="text-underline"
          data-test="menu-item"
          :to="{ name: route.name }">
          {{ route.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteNames } from '@/router';

export default defineComponent({
  name: 'Header',
  setup() {
    return {
      routes: [
        { title: 'Home', name: RouteNames.HOME },
        { title: 'Blog', name: RouteNames.BLOG },
        { title: 'Portfolio', name: RouteNames.PORTFOLIO },
        { title: 'Slides', name: RouteNames.PRESENTATIONS },
      ],
    };
  },
});
</script>
