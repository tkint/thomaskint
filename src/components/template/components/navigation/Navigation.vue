<template>
  <v-navigation-drawer
    persistent
    clipped
    app
    v-model="drawer"
  >
    <v-list dense>
      <navigation-item
        v-for="(item, index) in items"
        :key="index"
        :item="item">
      </navigation-item>
    </v-list>
    <template-footer></template-footer>
  </v-navigation-drawer>
</template>

<script>
import RouteNames from '@/router/names';
import NavigationItem from './NavigationItem';
import TemplateFooter from '../footer/Footer';

export default {
  name: 'Navigation',
  components: { NavigationItem, TemplateFooter },
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
  methods: {},
};
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  a:hover {
    text-shadow: 0 0 10px #fff;
  }
</style>
