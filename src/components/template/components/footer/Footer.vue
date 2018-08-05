<template>
  <v-footer fixed app style="z-index: 999;">
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
import SettingNames from '@/plugins/global/settings-names';

export default {
  name: 'Footer',
  computed: {
    emailAdress() {
      return this.$global.getSettingValue(SettingNames.EMAIL_ADRESS);
    },
    gitUrl() {
      return this.$global.getSettingValue(SettingNames.GIT_URL);
    },
    linkedinUrl() {
      return this.$global.getSettingValue(SettingNames.LINKEDIN_URL);
    },
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
