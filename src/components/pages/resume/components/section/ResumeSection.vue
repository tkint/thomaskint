<template>
  <v-container fluid grid-list-md>
    <v-layout column wrap>
      <section-item
        v-for="(item, subIndex) in items"
        :index="`${index}-${subIndex}`"
        :key="`${index}-${subIndex}`"
        :item="item"
        :lockOver="lockOver"
        @lock="param => $emit('lock', param)"
      ></section-item>
    </v-layout>
  </v-container>
</template>

<script>
import SectionItem from './ResumeSectionItem';

export default {
  name: 'ResumeExperience',
  props: ['items', 'lockOver', 'index'],
  components: { SectionItem },
};
</script>

<style scoped>
</style>
