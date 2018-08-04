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
      <toolbar-navigation style="position: absolute"></toolbar-navigation>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <!--<v-toolbar-side-icon @click.stop="switchDrawer"></v-toolbar-side-icon>-->
        <v-btn
          large
          round
          flat
          @click="$global.openRouteByName({ name: RouteNames.HOME })">
          {{ siteTitle }}
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
import SettingNames from '@/plugins/global/settings-names';

import RouteNames from '@/router/names';

import { mapState, mapActions } from 'vuex';
import { keys as TStoreKeys } from '@/store/template';
import { types as ActionTypes } from '@/store/template/actions';

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
      progressBar: state => state.TemplateStore[TStoreKeys.PROGRESS_BAR],
    }),
    siteTitle() {
      return this.$global.getSettingValue(SettingNames.SITE_TITLE);
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
