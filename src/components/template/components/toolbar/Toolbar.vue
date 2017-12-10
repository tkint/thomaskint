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
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <!--<v-toolbar-side-icon @click.stop="switchDrawer"></v-toolbar-side-icon>-->
        <v-btn
          large
          round
          flat
          @click.stop="$global.openRoute(RouteNames.HOME)"
        >
          {{ getSiteTitle() }}
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <main-menu v-if="isConnected()"></main-menu>
      <account-dialog v-else></account-dialog>
    </v-toolbar>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  import RouteNames from '@/router/names';
  import SettingGetterTypes from '@/store/setting/getters/types';
  import UserGetterTypes from '@/store/user/getters/types';
  import ActionTypes from '@/store/template/actions/types';
  import ProgressBar from './ProgressBar';
  import MainMenu from './menu/MainMenu';
  import AccountDialog from './menu/accountdialog/AccountDialog';
  import ToolbarNavigation from './navigation/ToolbarNavigation';

  export default {
    name: 'Toolbar',
    components: { MainMenu, AccountDialog, ProgressBar, ToolbarNavigation },
    data() {
      return {
        RouteNames,
      };
    },
    computed: {
      ...mapState({
        progressBar: state => state.TemplateStore.progressBar,
      }),
    },
    methods: {
      ...mapGetters({
        isConnected: UserGetterTypes.IS_CONNECTED,
        getSiteTitle: SettingGetterTypes.GET_SITE_TITLE,
      }),
      ...mapActions({
        switchDrawer: ActionTypes.SWITCH_DRAWER,
      }),
    },
  };
</script>

<style scoped>
</style>
