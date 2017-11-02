<template>
  <v-app dark>
    <coming-soon v-if="comingSoon"></coming-soon>
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
  import { mapState } from 'vuex';
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
    computed: {
      ...mapState({
        comingSoon: state => state.ConfigStore.comingSoon,
      }),
    },
    methods: {},
  };
</script>

<style scoped>

</style>
