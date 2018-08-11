<template>
  <v-container fluid>
    <blockquote>
      <template v-for="line in presentation">
        <span v-html="line"></span>
      </template>
    </blockquote>
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
