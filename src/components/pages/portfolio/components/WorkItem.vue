<template>
  <v-card
    class="work-item"
    @click.native="$parent.openWork(work)"
    hover
    ripple
  >
    <v-card-media
      src="/static/img/material2.jpg"
      height="200px"
    >
    </v-card-media>
    <v-card-title>
      <div>
        <h3 class="headline mb-0">{{ work.title }}</h3>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'WorkItem',
  props: ['work'],
  data() {
    return {};
  },
};
</script>

<style scoped>
  .work-item {
    cursor: pointer;
  }
</style>
