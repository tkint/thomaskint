<template>
  <v-card-text v-bind:style="style" ref="details">
    <template v-for="description in item.descriptions">
      {{ description }}
      <br/>
    </template>
  </v-card-text>
</template>

<script>
export default {
  name: 'ResumeExperienceItemDetails',
  props: {
    item: Object,
    show: Boolean,
  },
  data() {
    return {
      style: {
        bottom: null,
      },
    };
  },
  watch: {
    show() {
      this.calculateStyle();
    },
  },
  methods: {
    isBottomOut() {
      if (this.$refs.details) {
        const details = this.$refs.details;
        const rect = details.getBoundingClientRect();
        return rect.bottom > window.innerHeight;
      }
      return false;
    },
    calculateStyle() {
      if (this.isBottomOut()) {
        this.style.bottom = '90px';
      } else {
        this.style.bottom = null;
      }
    },
  },
};
</script>

<style scoped>

</style>
