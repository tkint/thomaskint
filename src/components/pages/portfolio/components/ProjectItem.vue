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
        class="mb-0 mt-0"
        v-if="project.avatar && project.avatar !== ''">
        <img :src="project.avatar" width="150" class="elevation-5">
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
  methods: {
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
