<template>
  <v-navigation-drawer
    persistent
    clipped
    app
    v-model="drawer"
  >
    <v-list dense>
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
          { icon: this.$global.icons.ABOUT, text: 'About', route: RouteNames.ABOUT },
          { icon: this.$global.icons.RESUME, text: 'Resume', route: RouteNames.RESUME },
          { icon: this.$global.icons.BLOG, text: 'Blog', route: RouteNames.BLOG },
          { icon: this.$global.icons.PORTFOLIO, text: 'Portfolio', route: RouteNames.PORTFOLIO },
          { icon: this.$global.icons.CONTACT, text: 'Contact', route: RouteNames.CONTACT },
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
