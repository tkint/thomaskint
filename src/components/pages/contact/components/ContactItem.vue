<template>
  <v-btn
    round
    :ripple="false"
    class="elevation-3">
    <icon
      left
      v-if="item.icon"
      :value="item.icon">
    </icon>
    {{item.text}}
  </v-btn>
</template>

<script>
export default {
  name: 'ContactItem',
  props: {
    item: Object,
  },
};
</script>

<style scoped>

</style>
