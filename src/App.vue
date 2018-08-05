<template>
  <v-app dark>
    <coming-soon v-if="isComingSoon"></coming-soon>
    <div v-else>
      <!--<template-navigation></template-navigation>-->
      <template-toolbar></template-toolbar>
      <v-content>
        <router-view clipped-left></router-view>
      </v-content>
      <template-footer></template-footer>
    </div>
  </v-app>
</template>

<script>
import SettingNames from '@/plugins/global/settings-names';

import ComingSoon from '@/components/pages/redirection/ComingSoon';
import Template from '@/components/template';

export default {
  name: 'App',
  components: {
    TemplateToolbar: Template.Toolbar,
    TemplateNavigation: Template.Navigation,
    TemplateFooter: Template.Footer,
    ComingSoon,
  },
  computed: {
    isComingSoon() {
      if (process.env.NODE_ENV === 'development') {
        return false;
      }
      return this.$global.getSettingValue(SettingNames.COMING_SOON);
    },
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
