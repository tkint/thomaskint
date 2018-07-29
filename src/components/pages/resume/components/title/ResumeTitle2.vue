<template>
  <v-flex xs12 md6>
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
