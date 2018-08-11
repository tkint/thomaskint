<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs12 md6>
        <contact-form></contact-form>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex xs12 md6>
        <contact-list></contact-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export default {
  name: 'Contact',
  components: { ContactForm, ContactList },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
