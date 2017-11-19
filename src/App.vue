<template>
  <v-app dark>
    <coming-soon v-if="isComingSoon"></coming-soon>
    <div v-else-if="getComingSoon() !== null">
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
      this.autoSignin();
    },
    computed: {
      isComingSoon() {
        if (process.env.NODE_ENV === 'development') {
          return false;
        }
        return this.getComingSoon();
      },
    },
    methods: {
      autoSignin() {
        if (this.$cookie.get('id_user')) {
          this.getUserById(this.$cookie.get('id_user'));
        }
      },
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
