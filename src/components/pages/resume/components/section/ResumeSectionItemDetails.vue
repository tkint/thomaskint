<template>
  <v-card-text>
    <template v-for="description in item.descriptions">
      {{ description }}
      <br/>
    </template>
  </v-card-text>
</template>

<script>
export default {
  name: 'ResumeExperienceItemDetails',
  components: {},
  props: ['item', 'position'],
  data() {
    return {
      over: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>

</style>
