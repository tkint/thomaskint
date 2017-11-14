<template>
  <v-navigation-drawer
    persistent
    clipped
    app
    v-model="drawer"
  >
    <v-list dense>
      <navigation-item v-for="(item, index) in items" :key="index" :item="item"></navigation-item>
    </v-list>
    <v-footer fixed>
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
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters } from 'vuex';
  import SettingGetterTypes from '@/store/setting/getters/types';
  import RouteNames from '@/router/names';
  import NavigationItem from './NavigationItem';

  export default {
    name: 'Navigation',
    components: { NavigationItem },
    data() {
      return {
        items: [
          { icon: this.$global.icons.ABOUT, text: 'About', route: RouteNames.ABOUT },
          { icon: this.$global.icons.RESUME, text: 'Resume', route: RouteNames.RESUME },
          { icon: this.$global.icons.BLOG, text: 'Blog', route: RouteNames.BLOG },
          { icon: this.$global.icons.PORTFOLIO, text: 'Portfolio', route: RouteNames.PORTFOLIO },
          { icon: this.$global.icons.CONTACT, text: 'Contact', route: RouteNames.CONTACT },
        ],
      };
    },
    computed: {
      drawer: {
        get() {
          return this.$store.state.TemplateStore.drawer;
        },
        set() {
        },
      },
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
