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
  import { mapState, mapActions } from 'vuex';
  import ActionTypes from '@/store/user/actions/types';
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
    created() {
      this.getUserById(1);
    },
    methods: {
      ...mapActions({
        getUserById: ActionTypes.GET_USER_BY_ID,
      }),
    },
  };
</script>

<style scoped>

</style>
