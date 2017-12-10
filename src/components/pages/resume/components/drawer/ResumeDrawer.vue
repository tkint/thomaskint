<template>
  <v-navigation-drawer
    class="teal"
    width="300"
    style="margin-top: 50px"
  >
    <v-layout style="padding-top: 10px;" justify-center>
      <img src="/static/img/Avatar%2000.png"/>
    </v-layout>
    <v-list>
      <v-divider></v-divider>
      <resume-drawer-item content="Thomas Kint"></resume-drawer-item>
      <resume-drawer-item content="8 Rue Rigaud"></resume-drawer-item>
      <resume-drawer-item content="06 13 43 27 82"></resume-drawer-item>
      <v-divider></v-divider>
      <resume-drawer-item content="thomaskint.pro@gmail.com"></resume-drawer-item>
      <resume-drawer-item content="contact@thomaskint.com"></resume-drawer-item>
      <v-divider></v-divider>
      <resume-drawer-item content="http://thomaskint.com"></resume-drawer-item>
      <resume-drawer-item content="http://github.com/tkint"></resume-drawer-item>
      <v-divider></v-divider>
      <resume-drawer-item content="25 ans"></resume-drawer-item>
      <resume-drawer-item content="Permis B"></resume-drawer-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import ResumeDrawerItem from './ResumeDrawerItem';

  export default {
    name: 'ResumeDrawer',
    components: { ResumeDrawerItem },
    data() {
      return {};
    },
    created() {
    },
    computed: {},
    methods: {},
  };
</script>

<style scoped>
</style>
