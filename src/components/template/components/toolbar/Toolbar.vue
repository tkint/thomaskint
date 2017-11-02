<template>
  <div>
    <progress-bar v-if="progressBar"></progress-bar>
    <v-toolbar
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="switchDrawer"></v-toolbar-side-icon>
        <v-btn
          large
          round
          flat
          @click.stop="$global.openRoute(RouteNames.HOME)"
        >
          {{ title }}
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <main-menu v-if="isConnected()"></main-menu>
      <account-dialog v-else></account-dialog>
      <!--<v-btn-->
        <!--icon-->
        <!--large-->
        <!--@click.stop="$global.openRoute('Home')"-->
      <!--&gt;-->
        <!--<v-avatar size="32px" tile>-->
          <!--<img-->
            <!--src="../../../../assets/logo.png"-->
            <!--alt="Thomas Kint"-->
          <!--&gt;-->
        <!--</v-avatar>-->
      <!--</v-btn>-->
    </v-toolbar>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  import RouteNames from '@/router/names';
  import UserGetterTypes from '@/store/user/getters/types';
  import ActionTypes from '../../store/actions/types';
  import ProgressBar from './ProgressBar';
  import MainMenu from './menu/MainMenu';
  import AccountDialog from './menu/accountdialog/AccountDialog';

  export default {
    name: 'Toolbar',
    components: { MainMenu, AccountDialog, ProgressBar },
    data() {
      return {
        RouteNames,
        title: 'Thomas Kint',
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
      }),
      ...mapActions({
        switchDrawer: ActionTypes.SWITCH_DRAWER,
      }),
    },
  };
</script>

<style scoped>
</style>
