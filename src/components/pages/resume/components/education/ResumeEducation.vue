<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <resume-education-item
        v-for="(item, index) in items"
        :index="index"
        :key="index"
        :item="item"
      ></resume-education-item>
    </v-layout>
  </v-container>
</template>

<script>
  import ResumeEducationItem from './ResumeEducationItem';

  export default {
    name: 'ResumeEducation',
    components: { ResumeEducationItem },
    props: [],
    data() {
      return {
        items: [
          {
            title: 'Master Informatique',
            school: 'EPSI Montpellier',
          },
          {
            title: 'Bachelor 3ème année',
            school: 'EPSI Montpellier',
          },
          {
            title: 'BTS SIO - SLAM',
            school: 'ESICAD Montpellier',
          },
        ],
      };
    },
    created() {
    },
    computed: {},
    methods: {},
  };
</script>

<style scoped>
</style>
