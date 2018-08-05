<template>
  <v-list-tile :href="href" :target="isUrl() ? '_blank' : ''">
    <v-list-tile-action>
      <icon :value="content.icon"></icon>
    </v-list-tile-action>
    <v-list-tile-title>
      {{ content.value }}
    </v-list-tile-title>
  </v-list-tile>
</template>

<script>
const PhoneNumber = require('google-libphonenumber').PhoneNumberUtil.getInstance();

export default {
  name: 'ResumeDrawer',
  props: ['content'],
  computed: {
    href() {
      if (this.isMail()) {
        return `mailto:${this.content.value}`;
      } else if (this.isPhone()) {
        return `tel:${this.content.value}`;
      } else if (this.isUrl()) {
        return this.content.value;
      }
      return null;
    },
  },
  methods: {
    isMail() {
      return this.content.value.includes('@');
    },
    isUrl() {
      return this.content.value.includes('http');
    },
    isPhone() {
      try {
        PhoneNumber.parse(this.content.value);
        return true;
      } catch (e) {
        return false;
      }
    },
  },
};
</script>

<style scoped>
</style>
