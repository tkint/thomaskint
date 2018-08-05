<template>
  <v-flex xs12>
    <v-card class="blue darken-3" flat style="margin-left: -5px">
      <v-card-title>
        <div>
          <icon v-if="icon" :value="icon"></icon>
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
