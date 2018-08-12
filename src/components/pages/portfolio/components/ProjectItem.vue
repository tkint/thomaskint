<template>
  <v-card
    hover
    class="project-item"
    @click.native="openProject()">
    <v-chip
      class="chip"
      color="teal"
      v-if="foundWord">
      <span
        v-for="(part, index) in foundWordParts"
        :class="part.isSearch ? 'grey elevation-5' : ''">
        {{part.text}}
      </span>
    </v-chip>
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
import { mapState } from 'vuex';
import { keys as GlStoreKeys } from '@/store/global';

import RouteNames from '@/router/names';

export default {
  name: 'ProjectItem',
  props: ['project', 'search'],
  computed: {
    ...mapState({
      projectSearch: state => state.GlobalStore[GlStoreKeys.PROJECT_SEARCH],
    }),
    projectAvatar() {
      if (this.isProjectAvatarValid()) {
        return this.project.avatar;
      }
      return '/static/img/no-image.png';
    },
    foundWord() {
      let word = null;
      if (this.projectSearch) {
        let i = 0;
        while (i < this.filters.length && !word) {
          if (this.filters[i].toLowerCase()
            .includes(this.projectSearch.toLowerCase())) {
            word = this.filters[i];
          }
          i += 1;
        }
      }
      return word;
    },
    foundWordParts() {
      const parts = [];
      if (this.foundWord) {
        const wordStart = this.foundWord
          .toLowerCase()
          .indexOf(this.projectSearch.toLowerCase());
        const wordEnd = wordStart + this.projectSearch.length;
        let part = { isSearch: false, text: '' };
        for (let i = 0; i < this.foundWord.length; i += 1) {
          if (wordStart < i && i <= wordEnd) {
            part.isSearch = true;
          }
          if ((i === wordStart && i > 0) || i === wordEnd) {
            parts.push(part);
            part = { isSearch: false, text: '' };
          }
          part.text += this.foundWord[i];
        }
        parts.push(part);
      }
      return parts;
    },
    filters() {
      const filters = [this.project.name];
      if (this.project.languages) {
        Object.keys(this.project.languages)
          .forEach((language) => {
            if (!filters.includes(language)) {
              filters.push(language);
            }
          });
      }
      return filters;
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

  .chip {
    position: absolute;
    margin-top: -15px;
    z-index: 950;
  }
</style>
