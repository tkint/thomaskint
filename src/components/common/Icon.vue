<template>
  <i v-if="isFa" :class="value" :style="`color: ${color}`"></i>
  <v-icon v-else :color="color">{{value}}</v-icon>
</template>

<script>
export default {
  name: 'Icon',
  props: ['value', 'color'],
  computed: {
    isFa() {
      return this.value.includes('fa-');
    },
  },
};
</script>

<style scoped>
  i {
    font-size: 25px;
    color: white;
  }
</style>
