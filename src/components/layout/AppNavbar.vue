<template>
  <nav class="navbar navbar-expand navbar-dark fixed-top d-inline-block bg-secondary">
    <ul class="navbar-nav justify-content-center">
      <li class="nav-item" :key="`route-${index}`" v-for="(route, index) in routes">
        <router-link
            class="nav-link text-uppercase font-weight-bold"
            active-class="text-underline"
            :to="{ name: route.name }">
          {{ route.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import store from '../../store';
import SwitchButton from '../shared/SwitchButton.vue';
import { RouteNames } from '../../router';

export default defineComponent({
  name: 'AppNavbar',
  components: { SwitchButton },
  setup() {
    const route = useRoute();

    return {
      currentRoute: computed(() => route.path),
      routes: [
        { title: 'Home', name: RouteNames.HOME },
        { title: 'Blog', name: RouteNames.BLOG },
        { title: 'Portfolio', name: RouteNames.PORTFOLIO },
        { title: 'Slides', name: RouteNames.PRESENTATIONS },
      ],
      darkMode: computed<boolean>({
        get() {
          return store.state.config.darkMode;
        },
        set(newValue) {
          store.state.config.darkMode = newValue;
          store.state.config.save();
        },
      }),
      getLinkClass: (path: string) => {
        // ${currentRoute.startsWith(route.path) ? activeClass : ''}`
        console.log(path, route.matched);
        return [
          'nav-link',
          'font-weight-bold',
          'text-uppercase',
        ];
      },
      activeClass: 'text-underline',
    };
  },
});
</script>

<style scoped>
.navbar .navbar-header,
.navbar-collapse {
  float: none;
  display: inline-block;
  vertical-align: top;
  padding-left: 0;
  padding-right: 0;
}

@media (max-width: 768px) {
  .navbar-collapse {
    display: block;
  }
}

</style>
