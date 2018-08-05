<template>
  <v-flex xs3>
    <v-layout justify-center>
      <v-icon style="font-size: 50px">{{skill.icon}}</v-icon>
    </v-layout>
    <v-layout justify-center>
      {{ skill.name }}
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: 'SkillItem',
  props: {
    skill: { name: String, icon: String },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
