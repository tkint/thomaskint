<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import Panel from "@/components/home/Panel.vue";
import AppIcon from "@/components/common/AppIcon.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const form = reactive<{ email?: string; message?: string }>({});

enum State {
  INITIAL,
  LOADING,
  OK,
  KO,
}

const state = ref<State>(State.INITIAL);

const submit = async () => {
  if (form.email && form.message) {
    state.value = State.LOADING;
    const formData = new FormData();
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const result = await fetch(import.meta.env.VITE_APP_CONTACT_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      state.value = result.ok ? State.OK : State.KO;
    } catch (error) {
      state.value = State.KO;
    }

    setTimeout(() => {
      if (state.value === State.OK) {
        form.email = undefined;
        form.message = undefined;
      } else {
        state.value = State.INITIAL;
      }
    }, 1000);
  }
};

const submitClass = computed(() => {
  if (state.value === State.OK) return "btn-success";
  if (state.value === State.KO) return "btn-danger";
  return "btn-primary";
});

const isDisabled = computed(() => state.value !== State.INITIAL);
</script>

<template>
  <Panel vertical-align="middle">
    <template #title>
      <div class="text-uppercase">{{ t("home.contact.title") }}</div>
    </template>

    <div class="row justify-content-center">
      <div class="col-xs-12 col-sm-8 col-md-6 col-lg-4 col-xl-3">
        <div
          class="alert alert-success alert-dismissible"
          v-if="state === State.OK"
        >
          <h4 class="alert-heading fw-bold">
            <AppIcon icon="valid"></AppIcon>
            {{ t('home.contact.sent') }}
            <button
              type="button"
              class="btn-sm btn-close"
              @click="state = State.INITIAL"
            ></button>
          </h4>
          <p>Votre message a bien été envoyé</p>
        </div>

        <form @submit.prevent id="contact-form" v-else>
          <div class="row flex-column gy-4">
            <div class="col">
              <div class="form-group">
                <label for="email">Adresse email</label>
                <input
                  id="email"
                  class="form-control mt-1"
                  type="email"
                  v-model="form.email"
                  :disabled="isDisabled"
                  required
                />
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  class="form-control mt-1"
                  id="message"
                  rows="5"
                  v-model="form.message"
                  :disabled="isDisabled"
                  required
                ></textarea>
              </div>
            </div>

            <div class="col-6 d-grid align-self-center">
              <button
                type="submit"
                :class="['btn', 'align-self-center', submitClass]"
                @click="submit"
                :disabled="isDisabled"
              >
                <template v-if="state === State.INITIAL">{{ t('home.contact.send') }}</template>
                <template v-else-if="state === State.LOADING">
                  <div class="spinner-border spinner-border-sm"></div>
                  Envoi en cours
                </template>
                <template v-else="state === State.KO">
                  <AppIcon icon="invalid"></AppIcon>
                  Erreur
                </template>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Panel>
</template>

<style scoped>
.btn-success:disabled {
  opacity: initial;
}
.btn-danger:disabled {
  opacity: initial;
}
</style>
