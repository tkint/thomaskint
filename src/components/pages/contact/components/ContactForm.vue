<template>
  <v-card>
    <v-card-title>
      <h3 class="headline mb-0">
        Me contacter
      </h3>
    </v-card-title>
    <v-card-text>
      <v-text-field
        disabled
        label="To"
        :value="email">
      </v-text-field>
      <v-form method="POST" :action="action" ref="form">
        <v-text-field
          name="Email"
          label="Votre Email">
        </v-text-field>
        <v-textarea
          name="Message"
          label="Votre Message">
        </v-textarea>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="sendForm" color="teal" block round>Envoyer</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import SettingsNames from '@/plugins/global/settings-names';

export default {
  name: 'ContactForm',
  data() {
    return {
      config: {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
      formData: {
        email: null,
        message: null,
      },
    };
  },
  computed: {
    email() {
      return this.$global.getSettingValue(SettingsNames.EMAIL_ADRESS);
    },
    action() {
      return `https://formspree.io/${this.email}`;
    },
  },
  methods: {
    sendForm() {
      const form = this.$refs.form;
      if (form && form.$el && form.$el.submit) {
        form.$el.submit();
      }
    },
  },
};
</script>

<style scoped>

</style>
