<template>
  <v-menu bottom>
    <v-btn
      icon
      large
      slot="activator"
    >
      <v-icon>person</v-icon>
    </v-btn>
    <admin-menu v-if="isAdmin"></admin-menu>
    <user-menu v-else></user-menu>
  </v-menu>
</template>

<script>
  import { mapGetters } from 'vuex';
  import UserGetterTypes from '@/store/user/getters/types';
  import AdminMenu from './AdminMenu';
  import UserMenu from './UserMenu';

  export default {
    name: 'MainMenu',
    components: { AdminMenu, UserMenu },
    data() {
      return {};
    },
    computed: {
      loginDialog: {
        get() {
          return this.$store.state.TemplateStore.loginDialog;
        },
        set() {
        },
      },
      ...mapGetters({
        isAdmin: UserGetterTypes.IS_ADMIN,
      }),
    },
  };
</script>

<style scoped>

</style>
