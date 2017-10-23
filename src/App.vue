<template>
  <v-app id="inspire">
    <v-navigation-drawer
      persistent
      clipped
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-list-tile @click.stop="openRoute(item.route)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      clipped-left
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        {{ title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon large @click.stop="openRoute('Home')">
        <v-icon></v-icon>
      </v-btn>
      <v-btn icon large @click.stop="openRoute('Home')">
        <v-avatar size="32px" tile>
          <img
            src="./assets/logo.png"
            alt="Thomas Kint"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <main>
      <v-content>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  require('vuetify/dist/vuetify.min.css');

  export default {
    data() {
      return {
        title: 'Thomas Kint',
        dialog: false,
        drawer: true,
        items: [
          { icon: 'book', text: 'Blog', route: 'Blog' },
        ],
      };
    },
    methods: {
      openRoute(route) {
        this.$router.push({ name: route });
      },
    },
  };
</script>
