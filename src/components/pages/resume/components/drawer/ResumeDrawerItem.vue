<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-icon>home</v-icon>
    </v-list-tile-action>
    <v-list-tile-title>
      {{ content }}
    </v-list-tile-title>
  </v-list-tile>
</template>

<script>
export default {
  name: 'ResumeDrawer',
  components: {},
  props: ['content'],
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
