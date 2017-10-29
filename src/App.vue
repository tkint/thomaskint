<template>
  <v-app dark>
    <navigation></navigation>
    <toolbar></toolbar>
    <main>
      <v-content>
        <v-layout>
          <router-view clipped-left></router-view>
        </v-layout>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  import Template from '@/components/template';

  require('vuetify/dist/vuetify.min.css');

  export default {
    components: {
      Navigation: Template.Navigation,
      Toolbar: Template.Toolbar,
    },
    data() {
      return {
      };
    },
    methods: {
    },
  };
</script>

<style scoped>

</style>
