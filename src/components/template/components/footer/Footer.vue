<template>
  <v-footer fixed app style="z-index: 999;">
    <v-spacer></v-spacer>
    <a :href="`mailto:${emailAdress}`">
      <icon :value="$global.icons.MAIL"></icon>
    </a>
    <v-spacer></v-spacer>
    <a :href="gitUrl" target="_blank">
      <icon :value="$global.icons.GIT"></icon>
    </a>
    <v-spacer></v-spacer>
    <a :href="stackoverflowUrl" target="_blank">
      <icon :value="$global.icons.STACKOVERFLOW"></icon>
    </a>
    <v-spacer></v-spacer>
    <a :href="linkedinUrl" target="_blank">
      <icon :value="$global.icons.LINKEDIN"></icon>
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
    stackoverflowUrl() {
      return this.$global.getSettingValue(SettingNames.STACKOVERFLOW_URL);
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
