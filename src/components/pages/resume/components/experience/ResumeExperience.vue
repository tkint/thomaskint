<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <resume-experience-item
        v-for="(item, index) in items"
        :index="index"
        :key="index"
        :item="item"
      ></resume-experience-item>
    </v-layout>
  </v-container>
</template>

<script>
  import ResumeExperienceItem from './ResumeExperienceItem';

  export default {
    name: 'ResumeExperience',
    components: { ResumeExperienceItem },
    props: [],
    data() {
      return {
        items: [
          {
            title: 'Ingénieur Logiciel (alternance)',
            company: 'CAP GEMINI',
          },
          {
            title: 'Développeur informatique (alternance)',
            company: 'Oceanis Promotion',
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
