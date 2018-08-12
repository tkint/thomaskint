<template>
  <v-progress-linear
    id="progressbar"
    background-color="secondary"
    v-show="loading"
    v-model="value"
    :style="fixed ? 'position: fixed' : ''"
    :indeterminate="value === null"
    :color="color"
    :height="height">
  </v-progress-linear>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: 'success',
    },
    height: {
      type: Number,
      default: 5,
    },
    value: {
      type: Number,
      default: null,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
  #progressbar {
    position: absolute;
    z-index: 5;
    margin: 0;
  }
</style>
