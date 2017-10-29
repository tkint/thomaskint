<template>
  <v-navigation-drawer
    persistent
    clipped
    app
    v-model="drawer"
  >
    <v-list
      dense
    >
      <navigation-item v-for="(item, index) in items" :key="index" :item="item"></navigation-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import RouteNames from '@/router/names';
  import NavigationItem from './NavigationItem';

  export default {
    name: 'Navigation',
    components: { NavigationItem },
    data() {
      return {
        items: [
          { icon: 'person', text: 'About', route: RouteNames.ABOUT },
          { icon: 'featured_play_list', text: 'Resume', route: RouteNames.RESUME },
          { icon: 'book', text: 'Blog', route: RouteNames.BLOG },
          { icon: 'dashboard', text: 'Portfolio', route: RouteNames.PORTFOLIO },
          { icon: 'phone', text: 'Contact', route: RouteNames.CONTACT },
        ],
      };
    },
    computed: {
      drawer: {
        get() {
          return this.$store.state.TemplateStore.drawer;
        },
        set() {
        },
      },
    },
  };
</script>

<style scoped>

</style>
