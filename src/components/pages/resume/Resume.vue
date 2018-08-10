<template>
  <v-layout row wrap fill-height>
    <resume-drawer
      :show="drawer || showDrawer"
      @close="showDrawer = false">
    </resume-drawer>
    <v-layout :style="drawer ? 'margin-left: 300px' : ''">
      <v-flex xs12>
        <resume-title
          :content="title"
          :drawer="drawer"
          @switchDrawer="switchDrawer">
        </resume-title>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <resume-title2
              :lockOver="lockOver"
              content="Expériences"
              icon="show_chart">
            </resume-title2>
            <resume-section
              :items="experiences"
              :lockOver="lockOver"
              :index="0"
              @lock="setLock">
            </resume-section>
            <resume-title2
              :lockOver="lockOver"
              content="Education"
              icon="school">
            </resume-title2>
            <resume-section
              :items="education"
              :lockOver="lockOver"
              :index="1"
              @lock="setLock">
            </resume-section>
          </v-flex>
          <v-flex xs12 md6>
            <v-layout row wrap>
              <v-flex xs12>
                <resume-presentation :presentation="presentation">
                </resume-presentation>
              </v-flex>
              <v-flex xs12>
                <resume-skills
                  :skills="skills">
                </resume-skills>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
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
import ResumePresentation from './components/presentation/Presentation';
import ResumeSkills from './components/skills/Skills';

export default {
  name: 'Resume',
  components: {
    ResumeDrawer,
    ResumeTitle,
    ResumeTitle2,
    ResumeSection,
    ResumePresentation,
    ResumeSkills,
  },
  data() {
    return {
      showDrawer: false,
      lockOver: false,
      title: ResumeData.title,
      experiences: ResumeData.experiences,
      education: ResumeData.education,
      presentation: ResumeData.presentation,
      skills: ResumeData.skills,
    };
  },
  computed: {
    drawer() {
      return this.$vuetify.breakpoint.name !== 'xs'
        && this.$vuetify.breakpoint.name !== 'sm';
    },
  },
  methods: {
    switchDrawer() {
      this.showDrawer = !this.showDrawer;
    },
    setLock(value) {
      this.lockOver = value;
      this.showDrawer = false;
    },
  },
};
</script>

<style scoped>
</style>
