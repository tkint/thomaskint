<template>
  <v-flex xs12>
    <v-card class="teal">
      <v-card-title>
        <div>
          <v-icon v-if="icon">{{ icon }}</v-icon>
          {{ content }}
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>

export default {
  name: 'ResumeTitle2',
  props: ['content', 'icon'],
};
</script>

<style scoped>
</style>
