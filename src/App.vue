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

<style>
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none !important;
    -webkit-text-fill-color: white !important;
    -webkit-box-shadow: 0 0 0px 1000px #424242 inset;
    transition: background-color 5000s ease-in-out 0s;
  }
</style>
