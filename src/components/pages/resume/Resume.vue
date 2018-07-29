<template>
  <v-layout row wrap fill-height>
    <resume-drawer></resume-drawer>
    <v-layout style="margin-left: 300px">
      <v-flex xs12>
        <resume-title content="Ingénieur Logiciel"></resume-title>
        <resume-title2 content="Expériences" icon="show_chart"></resume-title2>
        <resume-experience></resume-experience>
        <resume-title2 content="Education" icon="school"></resume-title2>
        <resume-education></resume-education>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import ResumeDrawer from './components/drawer/ResumeDrawer';
import ResumeTitle from './components/title/ResumeTitle';
import ResumeTitle2 from './components/title/ResumeTitle2';
import ResumeExperience from './components/experience/ResumeExperience';
import ResumeEducation from './components/education/ResumeEducation';

export default {
  name: 'Resume',
  components: { ResumeDrawer, ResumeTitle, ResumeTitle2, ResumeExperience, ResumeEducation },
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
