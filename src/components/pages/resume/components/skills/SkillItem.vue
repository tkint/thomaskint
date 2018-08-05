<template>
  <v-flex xs3 class="skill-item" @mouseover="color = 'orange'" @mouseleave="color = 'white'" mt-4>
    <v-layout justify-center>
      <icon :value="skill.icon" style="font-size: 50px" :color="color"></icon>
    </v-layout>
    <v-layout justify-center pt-2>
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
    return {
      color: 'white',
    };
  },
};
</script>

<style scoped>
  .skill-item:hover {
    cursor: pointer;
    color: orange !important;
  }
</style>
