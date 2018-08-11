<template>
  <v-btn
    flat
    slot="activator"
    :class="currentPage ? 'teal darken-1' : ''"
    @click.stop="$global.openRoute({route: item.route})">
    <icon :value="item.icon"></icon>
    <span class="legend">{{ item.text }}</span>
  </v-btn>
</template>

<script>
export default {
  name: 'ToolbarNavigationItem',
  props: ['item'],
  computed: {
    currentPage() {
      return this.$route.path.includes(this.item.route.path);
    },
  },
};
</script>

<style scoped>
  .legend {
    padding-left: 5px;
  }
</style>
