<template>
  <v-footer fixed app>
    <v-spacer></v-spacer>
    <a :href="`mailto:${emailAdress}`">
      <v-icon>mail</v-icon>
    </a>
    <v-spacer></v-spacer>
    <a :href="gitUrl" target="_blank">
      <v-icon>fa-gitlab</v-icon>
    </a>
    <v-spacer></v-spacer>
    <a :href="linkedinUrl" target="_blank">
      <v-icon>fa-linkedin-square</v-icon>
    </a>
    <v-spacer></v-spacer>
  </v-footer>
</template>

<script>
import Services from '@/services';
import SettingNames from '@/services/settings/names';

export default {
  name: 'Footer',
  components: {},
  data() {
    return {};
  },
  computed: {
    emailAdress() {
      return Services.settings.getSettingValue(SettingNames.EMAIL_ADRESS);
    },
    gitUrl() {
      return Services.settings.getSettingValue(SettingNames.GIT_URL);
    },
    linkedinUrl() {
      return Services.settings.getSettingValue(SettingNames.LINKEDIN_URL);
    },
  },
  methods: {},
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
