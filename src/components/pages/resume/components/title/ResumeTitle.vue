<template>
  <v-toolbar class="teal darken-1" @click="$emit('switchDrawer')">
    <v-toolbar-title>
      <v-btn
        icon
        v-if="!drawer"
        style="margin-left: 0">
        <icon value="menu"></icon>
      </v-btn>
      {{ content }}
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'ResumeTitle',
  props: ['content', 'drawer'],
};
</script>

<style scoped>
</style>
