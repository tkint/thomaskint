<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <skill-item
        v-for="(item, index) in skills"
        :key="index"
        :skill="item"
        v-if="!item.hidden">
      </skill-item>
    </v-layout>
  </v-container>
</template>

<script>
import SkillItem from './SkillItem';

export default {
  name: 'Skills',
  props: ['skills'],
  components: { SkillItem },
};
</script>

<style scoped>

</style>
