<template>
  <v-btn
    flat
    slot="activator"
    @click.stop="$global.openRoute({route: item.route})"
    @mouseover="onMouseOver()"
    @mouseleave="onMouseLeave()">
    <icon :value="item.icon"></icon>
    <span v-if="over || currentPage" class="legend">{{ item.text }}</span>
  </v-btn>
</template>

<script>
export default {
  name: 'ToolbarNavigationItem',
  props: ['item'],
  data() {
    return {
      over: false,
    };
  },
  computed: {
    currentPage() {
      return this.$route.path.includes(this.item.route.path);
    },
  },
  methods: {
    onMouseOver() {
      if (!this.over) {
        this.over = true;
      }
    },
    onMouseLeave() {
      if (this.over) {
        this.over = false;
      }
    },
  },
};
</script>

<style scoped>
  .legend {
    padding-left: 5px;
  }
</style>
