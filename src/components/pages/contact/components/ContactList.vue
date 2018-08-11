<template>
  <v-container fluid>
    <v-flex xs12>
      <v-layout justify-center>
        <a :href="`mailto:${emailAdress}`">
          <icon large class="social-icon" value="mail"></icon>
        </a>
        <a :href="gitUrl" target="_blank">
          <icon large class="social-icon" value="fab fa-gitlab"></icon>
        </a>
        <a :href="linkedinUrl" target="_blank">
          <icon large class="social-icon" value="fab fa-linkedin"></icon>
        </a>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
import SettingsNames from '@/plugins/global/settings-names';

export default {
  name: 'ContactList',
  computed: {
    emailAdress() {
      return this.$global.getSettingValue(SettingsNames.EMAIL_ADRESS);
    },
    gitUrl() {
      return this.$global.getSettingValue(SettingsNames.GIT_URL);
    },
    linkedinUrl() {
      return this.$global.getSettingValue(SettingsNames.LINKEDIN_URL);
    },
  },
};
</script>

<style scoped>
  a {
    text-decoration: none;
    padding: 15px;
  }

  a:hover {
    text-shadow: 0 0 10px #fff;
  }

  .social-icon {
    font-size: 50px !important;
  }
</style>
