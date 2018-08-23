<template>
  <v-list-group
    no-action
    v-if="isClickable()"
    :append-icon="null"
    :prepend-icon="content.icon">
    <input
      type="text"
      ref="clipboard"
      class="clipboard"
      :value="content.value"/>
    <v-list-tile
      slot="activator"
      no-action>
      <v-list-tile-title style="text-overflow: ellipsis; max-width: 220px">
        {{ content.value }}
      </v-list-tile-title>
    </v-list-tile>
    <v-list-tile @click="copy()">
      Copier
    </v-list-tile>
    <v-list-tile
      :href="href"
      :target="isUrl() ? '_blank' : ''">
      Ouvrir
    </v-list-tile>
  </v-list-group>
  <v-list-tile
    v-else>
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
    isClickable() {
      return this.isMail() || this.isUrl() || this.isPhone();
    },
    copy() {
      const text = this.$refs.clipboard;
      text.select();
      document.execCommand('copy');
    },
  },
};
</script>

<style scoped>
  .clipboard {
    position: absolute;
    height: 0;
  }
</style>
