<template>
  <v-card
    class="project-item"
    @click.native="openProject()"
    hover>
    <progress-bar
      :height="2"
      :value="project.loadingValue"
      color="teal">
    </progress-bar>
    <v-card-title class="pb-0">
      <v-layout
        column
        align-center
        class="mb-0 mt-0">
        <img
          width="150"
          :src="projectAvatar"
          :class="isProjectAvatarValid() ? 'elevation-5' : 'elevation-0'">
      </v-layout>
      <h1 class="mb-0" style="width: 100%">{{ project.name }}</h1>
      Dernière activité:
      {{ $global.formatDate(project.updated) }}
    </v-card-title>
    <v-card-text>
      <span v-if="project.description" style="font-size: 17px">
        {{ project.description }}
      </span>
      <span v-else>
        [Pas de description]
      </span>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :href="project.url"
        target="_blank"
        block
        color="teal"
        @click.stop="">
        GITLAB
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import RouteNames from '@/router/names';

export default {
  name: 'ProjectItem',
  props: ['project'],
  computed: {
    projectAvatar() {
      if (this.isProjectAvatarValid()) {
        return this.project.avatar;
      }
      return '/static/img/no-image.png';
    },
  },
  methods: {
    isProjectAvatarValid() {
      return this.project && this.project.avatar && this.project.avatar !== '';
    },
    openProject() {
      this.$global.openRouteByName({
        name: RouteNames.PORTFOLIO_PROJECT,
        params: { id: this.project.system_name },
      });
    },
  },
};
</script>

<style scoped>
  .project-item {
    cursor: pointer;
  }
</style>
