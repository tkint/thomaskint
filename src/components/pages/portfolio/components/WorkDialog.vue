<template>
  <v-dialog
    v-model="showProject"
    max-width="60%"
    scrollable
    id="work-dialog">
    <v-card v-if="project">
      <v-card-media
        height="200px"
        src="/static/img/material2.jpg">
        <v-container fluid>
          <v-layout row wrap>
            <v-btn
              fab
              dark
              small
              color="primary">
              <icon :value="$global.icons.SHARE"></icon>
            </v-btn>
            <v-spacer></v-spacer>
            <h3>{{ project.name }}</h3>
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
        <statistics :project="project"></statistics>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Statistics from './Statistics';

export default {
  name: 'WorkDialog',
  components: { Statistics },
  props: ['project', 'show'],
  data() {
    return {
      options: {
        responsive: false,
        maintainAspectRatio: false,
      },
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
