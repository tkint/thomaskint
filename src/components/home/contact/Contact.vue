<script lang="ts" setup>
import { computed, reactive, ref } from "vue";
import Panel from "@/components/common/Panel.vue";
import AppIcon from "../../common/AppIcon.vue";

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
    formData.append("_replyto", form.email);
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
      }
      state.value = State.INITIAL;
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
    <div class="row mb-4">
      <h1 class="col text-uppercase text-center">Me contacter</h1>
    </div>

    <div class="row justify-content-center">
      <div class="col-xs-12 col-md-3">
        <form @submit.prevent id="contact-form">
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
                <template v-if="state === State.INITIAL">Envoyer</template>
                <template v-else-if="state === State.LOADING">
                  <div class="spinner-border spinner-border-sm"></div>
                  Envoi en cours
                </template>
                <template v-else-if="state === State.OK">
                  <AppIcon icon="valid"></AppIcon>
                  Envoyé
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
