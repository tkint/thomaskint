<template>
  <div>
    <progress-bar v-if="progressBar"></progress-bar>
    <v-toolbar
      dark
      app
      clipped-left
      fixed
      height="50"
    >
      <toolbar-navigation></toolbar-navigation>
      <v-toolbar-title>
        <!--<v-toolbar-side-icon @click.stop="switchDrawer"></v-toolbar-side-icon>-->
        <v-btn
          large
          round
          flat
          @click.stop="$global.openRoute(RouteNames.HOME)">
          {{ siteTitle }}
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
import Services from '@/services';
import SettingNames from '@/services/settings/names';

import RouteNames from '@/router/names';

import { mapState, mapActions } from 'vuex';
import ActionTypes from '@/store/template/actions/types';

import ProgressBar from './ProgressBar';
import ToolbarNavigation from './navigation/ToolbarNavigation';

export default {
  name: 'Toolbar',
  components: { ProgressBar, ToolbarNavigation },
  data() {
    return {
      RouteNames,
    };
  },
  computed: {
    ...mapState({
      progressBar: state => state.TemplateStore.progressBar,
    }),
    siteTitle() {
      return Services.settings.getSettingValue(SettingNames.SITE_TITLE);
    },
  },
  methods: {
    ...mapActions({
      switchDrawer: ActionTypes.SWITCH_DRAWER,
    }),
  },
};
</script>

<style scoped>
</style>
