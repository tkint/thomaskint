<template>
  <v-container fluid grid-list-md>
    <v-layout column wrap>
      <section-item
        v-for="(item, index) in items"
        :index="index"
        :key="index"
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
  components: { SectionItem },
  props: ['items', 'lockOver'],
  data() {
    return {};
  },
  created() {
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
</style>
