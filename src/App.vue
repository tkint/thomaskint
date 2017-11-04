<template>
  <v-app dark>
    <coming-soon v-if="getComingSoon()"></coming-soon>
    <div v-else>
      <navigation></navigation>
      <toolbar></toolbar>
      <main>
        <v-content>
          <v-layout>
            <router-view clipped-left></router-view>
          </v-layout>
        </v-content>
      </main>
    </div>
  </v-app>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import SettingGetterTypes from '@/store/setting/getters/types';
  import SettingActionTypes from '@/store/setting/actions/types';
  import UserActionTypes from '@/store/user/actions/types';
  import ComingSoon from '@/components/pages/redirection/ComingSoon';
  import Template from '@/components/template';

  require('vuetify/dist/vuetify.min.css');

  export default {
    components: {
      Navigation: Template.Navigation,
      Toolbar: Template.Toolbar,
      ComingSoon,
    },
    data() {
      return {};
    },
    created() {
      this.getSettings();
      this.getUserById(1);
    },
    methods: {
      ...mapGetters({
        getComingSoon: SettingGetterTypes.GET_COMING_SOON,
      }),
      ...mapActions({
        getSettings: SettingActionTypes.GET_SETTINGS,
        getUserById: UserActionTypes.GET_USER_BY_ID,
      }),
    },
  };
</script>

<style scoped>

</style>
