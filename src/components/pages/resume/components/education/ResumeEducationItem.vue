<!--TODO: Au clic sur le titre, accéder au portfolio en cherchant d'après un tag de rattachement (BookKeeper)-->
<!--TODO: Sinon, afficher le portfolio filtré en POPUP temporaire-->
<template>
  <v-flex xs12 md6 v-if="item">
    <v-card light>
      <v-card-title>
        <div>{{ item.title }}</div>
      </v-card-title>
      <v-card-text>
        {{ item.school }}
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: 'ResumeEducationItem',
    components: {},
    props: ['item'],
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
