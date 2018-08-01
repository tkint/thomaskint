<template>
  <v-layout row wrap fill-height>
    <resume-drawer></resume-drawer>
    <v-layout style="margin-left: 300px">
      <v-flex xs12>
        <resume-title :content="title"></resume-title>
        <resume-title2 content="Expériences" icon="show_chart"></resume-title2>
        <resume-section
          :items="experiences"
          :lockOver="lockOver"
          @lock="param => lockOver = param">
        </resume-section>
        <resume-title2 content="Education" icon="school"></resume-title2>
        <resume-section
          :items="education"
          :lockOver="lockOver"
          @lock="param => lockOver = param">
        </resume-section>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import ResumeData from '@/assets/data/resume.json';
import ResumeDrawer from './components/drawer/ResumeDrawer';
import ResumeTitle from './components/title/ResumeTitle';
import ResumeTitle2 from './components/title/ResumeTitle2';
import ResumeSection from './components/section/ResumeSection';

export default {
  name: 'Resume',
  components: { ResumeDrawer, ResumeTitle, ResumeTitle2, ResumeSection },
  data() {
    return {
      lockOver: false,
      title: ResumeData.title,
      experiences: ResumeData.experiences,
      education: ResumeData.education,
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
