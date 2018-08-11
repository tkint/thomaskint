<template>
  <v-dialog
    v-model="showProject"
    max-width="60%"
    scrollable
    id="work-dialog">
    <v-card v-if="project">
      <v-card-media src="/static/img/material2.jpg">
        <v-container fluid>
          <v-layout row wrap>
            <v-speed-dial hover direction="right" transition="slide-y-transition">
              <v-btn
                fab
                dark
                small
                color="primary"
                slot="activator">
                <icon :value="$global.icons.SHARE"></icon>
              </v-btn>
              <v-btn
                fab
                dark
                small
                color="red"
                class="mb-3"
                @click.stop="showProject = false"
                v-for="(sharingItem, index) in sharingItems"
                :key="index">
                <icon :value="sharingItem.icon"></icon>
              </v-btn>
            </v-speed-dial>
            <v-spacer></v-spacer>
            <h1>{{ project.name }}</h1>
            <v-spacer></v-spacer>
            <v-btn
              fab
              dark
              small
              color="red"
              @click.stop="showProject = false">
              <icon :value="$global.icons.CLOSE"></icon>
            </v-btn>
          </v-layout>
        </v-container>
      </v-card-media>
      <v-card-text>
        <project-statistics :project="project"></project-statistics>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import ProjectStatistics from './ProjectStatistics';

export default {
  name: 'WorkDialog',
  components: { ProjectStatistics },
  props: ['project', 'show'],
  data() {
    return {
      options: {
        responsive: false,
        maintainAspectRatio: false,
      },
      sharingItems: [
        { target: 'mail', icon: this.$global.icons.MAIL },
        { target: 'facebook', icon: this.$global.icons.FACEBOOK },
      ],
    };
  },
  computed: {
    showProject: {
      get() {
        return this.show;
      },
      set() {
        this.$emit('close');
      },
    },
  },
};
</script>

<style scoped>
  h3 {
    height: 100%;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    font-variant: small-caps;
    text-shadow: 1px 1px 1px #000;
  }
</style>
