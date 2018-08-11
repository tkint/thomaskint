<template>
  <span>
    <span v-if="!duration.to">Depuis</span>
    {{ duration.from }}
    <span v-if="duration.to"> - {{ duration.to }}</span>
    {{ years }}
  </span>
</template>

<script>
export default {
  name: 'Duration',
  props: ['duration'],
  computed: {
    years() {
      const years = this.getYears();
      let passed = '(';
      if (years < 1) {
        passed += 'Moins d\'un an';
      } else {
        passed += years;
        passed += years > 1 ? ' ans' : ' an';
      }
      passed += ')';
      return passed;
    },
  },
  methods: {
    getYears() {
      let to = this.duration.to;
      if (to) {
        to = parseInt(this.duration.to, 10);
      } else {
        to = new Date().getFullYear();
      }
      return to - parseInt(this.duration.from, 10);
    },
  },
};
</script>

<style scoped>

</style>
