<template>
  <v-toolbar class="indigo">
    <v-toolbar-title>
      <v-btn
        icon
        v-if="!drawer"
        @click="$emit('switchDrawer')"
        style="margin-left: 0">
        <v-icon>menu</v-icon>
      </v-btn>
      {{ content }}
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'ResumeTitle',
  components: {},
  props: ['content', 'drawer'],
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
