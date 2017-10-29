<template>
  <v-card flat>
    <v-card-title>
      Sign in to your account
      <v-spacer></v-spacer>
      <small>*indicates required field</small>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm6>
            <v-text-field label="Email" required autofocus></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field label="Password" required type="password"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-3" @click="">Sign in</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'SignUpForm',
    data() {
      return {};
    },
    computed: {
    },
  };
</script>

<style scoped>

</style>
