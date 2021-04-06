<template>
  <nav class="navbar navbar-expand navbar-light fixed-top bg-primary">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
              class="nav-link font-weight-bold text-uppercase"
              active-class="active text-white bg-secondary rounded"
              to="/">
            home
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item" :key="`route-${index}`" v-for="(route, index) in routes">
          <router-link
              :class="`nav-link font-weight-bold text-uppercase ${currentRoute.startsWith(route.path) ? activeClass : ''}`"
              :to="route.path">
            {{ route.title }}
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <switch-button v-model="darkMode"></switch-button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import store from '../../store';
import SwitchButton from '../shared/SwitchButton.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'AppNavbar',
  components: { SwitchButton },
  setup() {
    const route = useRoute();

    return {
      currentRoute: computed(() => route.path),
      routes: [
        { title: 'Blog', path: '/blog' },
        { title: 'Slides', path: '/slides' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Contact', path: '/contact' },
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
      activeClass: 'active text-white bg-secondary rounded',
    };
  },
});
</script>

<style scoped>
</style>
