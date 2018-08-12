<template>
  <v-container fluid>
    <template v-for="line in presentation">
      <span v-html="line"></span>
    </template>
  </v-container>
</template>

<script>
export default {
  name: 'Presentation',
  props: ['presentation'],
};
</script>

<style scoped>

</style>
