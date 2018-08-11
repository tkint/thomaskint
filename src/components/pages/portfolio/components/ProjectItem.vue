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
    <v-card-title>
      <h3 class="mb-0" style="width: 100%">{{ project.name }}</h3>
      Dernière activité:
      {{ $global.formatDate(project.updated) }}
    </v-card-title>
    <v-card-text>
      <span v-if="project.description">
      {{ project.description }}
      </span>
      <span v-else>
        [Pas de description]
      </span>
      <br/>
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
