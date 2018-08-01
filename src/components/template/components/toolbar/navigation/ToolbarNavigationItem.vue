<template>
  <v-btn
    :icon="!over"
    flat
    round
    slot="activator"
    @click.stop="$global.openRoute(item.route)"
    @mouseover="onMouseOver()"
    @mouseleave="onMouseLeave()">
    <v-icon>{{ item.icon }}</v-icon>
    <span v-if="over" class="legend">{{ item.text }}</span>
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
  methods: {
    onMouseOver() {
      this.over = true;
    },
    onMouseLeave() {
      if (this.over) {
        this.$global.sleep(500).then(() => {
          this.over = false;
        });
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
