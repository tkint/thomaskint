<template>
  <v-toolbar class="indigo">
    <v-toolbar-title>
      <v-icon v-if="icon" class="pl-2">{{ icon }}</v-icon>
      {{ content }}
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'ResumeTitle',
  components: {},
  props: ['content', 'icon'],
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
