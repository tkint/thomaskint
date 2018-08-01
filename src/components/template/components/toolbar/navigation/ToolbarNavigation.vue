<template>
  <v-toolbar-items>
    <toolbar-navigation-item
      v-for="(item, index) in items"
      :key="index"
      :item="item">
    </toolbar-navigation-item>
  </v-toolbar-items>
</template>

<script>
import RouteNames from '@/router/names';
import ToolbarNavigationItem from './ToolbarNavigationItem';

export default {
  name: 'ToolbarNavigation',
  components: { ToolbarNavigationItem },
  data() {
    return {
      items: [
        { icon: this.$global.icons.RESUME, text: 'CV', route: RouteNames.RESUME },
        { icon: this.$global.icons.PORTFOLIO, text: 'Portfolio', route: RouteNames.PORTFOLIO },
        { icon: this.$global.icons.CONTACT, text: 'Contact', route: RouteNames.CONTACT },
      ],
    };
  },
  computed: {},
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
