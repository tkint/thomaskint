<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <skill-item
        v-for="(item, index) in skills"
        :key="index"
        :skill="item">
      </skill-item>
    </v-layout>
  </v-container>
</template>

<script>
import SkillItem from './SkillItem';

export default {
  name: 'Skills',
  props: {
    skills: Array,
  },
  components: { SkillItem },
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
