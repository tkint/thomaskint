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
              <v-icon>{{ $global.icons.SHARE }}</v-icon>
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
              <v-icon>{{ $global.icons.CLOSE }}</v-icon>
            </v-btn>
          </v-layout>
        </v-container>
      </v-card-media>
      <v-card-text>{{ project }}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'WorkDialog',
  props: ['project', 'show'],
  data() {
    return {};
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
