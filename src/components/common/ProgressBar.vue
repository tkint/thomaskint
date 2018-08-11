<template>
  <v-progress-linear
    id="progressbar"
    background-color="secondary"
    v-show="loading"
    v-model="value"
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
