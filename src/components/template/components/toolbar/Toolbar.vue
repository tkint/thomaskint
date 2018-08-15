<template>
  <div>
    <progress-bar :loading="progressBar" style="z-index: 999;" fixed></progress-bar>
    <v-toolbar
      app
      dark
      flat
      fixed
      height="50" style="z-index: 998;">
      <toolbar-navigation style="position: absolute"></toolbar-navigation>
      <v-spacer class="hidden-xs-only"></v-spacer>
      <v-toolbar-title class="hidden-xs-only">
        <!--<v-toolbar-side-icon @click.stop="switchDrawer"></v-toolbar-side-icon>-->
        <v-btn
          large
          round
          flat
          @click="$global.openRouteByName({ name: RouteNames.HOME })">
          {{ siteTitle }}
        </v-btn>
      </v-toolbar-title>
      <v-spacer class="hidden-md-and-down"></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
import SettingNames from '@/plugins/global/settings-names';

import RouteNames from '@/router/names';

import { mapState, mapActions } from 'vuex';
import { keys as TStoreKeys } from '@/store/template';
import { types as ActionTypes } from '@/store/template/actions';

import ToolbarNavigation from './navigation/ToolbarNavigation';

export default {
  name: 'Toolbar',
  components: { ToolbarNavigation },
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
