<template>
  <v-flex xs12>
    <v-card
      flat
      :class="lockOver ? 'blue-grey darken-3 faded elevation-0' : 'blue darken-3'"
      style="margin-left: -5px">
      <v-card-title>
        <div :class="lockOver ? 'blue-grey--text text--darken-1' : ''">
          <icon v-if="icon" :value="icon" :color="lockOver ? 'blue-grey darken-1' : ''"></icon>
          {{ content }}
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>

export default {
  name: 'ResumeTitle2',
  props: ['content', 'icon', 'lockOver'],
};
</script>

<style scoped>
  .faded {
    text-shadow: none;
  }
</style>
