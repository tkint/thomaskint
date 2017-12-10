<template>
    <v-footer fixed app>
      <v-spacer></v-spacer>
      <a :href="`mailto:${getEmailAdress()}`">
        <v-icon>mail</v-icon>
      </a>
      <v-spacer></v-spacer>
      <a :href="getGithubUrl()">
        <v-icon>fa-github</v-icon>
      </a>
      <v-spacer></v-spacer>
      <a :href="getLinkedinUrl()">
        <v-icon>fa-linkedin-square</v-icon>
      </a>
      <v-spacer></v-spacer>
    </v-footer>
</template>

<script>
  import { mapGetters } from 'vuex';
  import SettingGetterTypes from '@/store/setting/getters/types';

  export default {
    name: 'Footer',
    components: { },
    data() {
      return {
      };
    },
    computed: {
    },
    methods: {
      ...mapGetters({
        getEmailAdress: SettingGetterTypes.GET_EMAIL_ADRESS,
        getGithubUrl: SettingGetterTypes.GET_GITHUB_URL,
        getLinkedinUrl: SettingGetterTypes.GET_LINKEDIN_URL,
      }),
    },
  };
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  a:hover {
    text-shadow: 0 0 10px #fff;
  }
</style>
