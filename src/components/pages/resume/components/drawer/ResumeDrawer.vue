<template>
  <v-navigation-drawer
    class="teal  darken-1"
    width="300"
    style="margin-top: 50px; z-index: 999"
    v-click-outside="onBlur"
    v-model="show">
    <v-flex xs6 offset-xs3 mt-3>
      <v-card>
        <v-card-media src="/static/img/Avatar%2000.jpg" height="150px">
        </v-card-media>
      </v-card>
    </v-flex>
    <v-list>
      <template v-for="(item, index) in resumeData" v-if="index > 0">
        <v-divider v-if="item === divider"></v-divider>
        <resume-drawer-item :content="item" v-else></resume-drawer-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ClickOutside from 'vue-click-outside';

import ResumeData from '@/assets/data/resume.json';
import ResumeDrawerItem from './ResumeDrawerItem';

export default {
  name: 'ResumeDrawer',
  props: ['show'],
  components: { ResumeDrawerItem },
  data() {
    return {
      divider: 'divider',
    };
  },
  computed: {
    resumeData() {
      const resumeData = [];
      ResumeData.coordinates.forEach((partData) => {
        resumeData.push(this.divider);
        partData.forEach(data => resumeData.push(data));
      });
      return resumeData;
    },
  },
  methods: {
    onBlur() {
      if (this.show) {
        this.$emit('close');
      }
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>

<style scoped>
</style>
