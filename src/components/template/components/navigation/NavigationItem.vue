<template>
  <v-list-tile @click.stop="$global.openRoute(item.route)">
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

<script>
export default {
  name: 'Navigation',
  props: ['item'],
};
</script>

<style scoped>

</style>
