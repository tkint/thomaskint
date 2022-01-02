<script lang="ts" setup>
import { watch } from "vue";
import { useI18n } from "vue-i18n";
import useCookies from "@/composables/useCookies";
import i18n, { localeCookieKey } from "@/i18n";
import frFlag from "@/assets/flags/fr.svg";
import enFlag from "@/assets/flags/gb.svg";

const cookies = useCookies();

const { availableLocales } = i18n.global;
const { locale: currentLocale } = useI18n();

const flags = {
  fr: frFlag,
  en: enFlag,
};

watch(currentLocale, (newLocale) => {
  cookies.set(localeCookieKey, newLocale);
});
</script>

<template>
  <div>
    <template v-for="(locale, index) in availableLocales">
      <input
        type="radio"
        class="btn-check"
        :id="`locale-${index}`"
        autocomplete="off"
        v-model="currentLocale"
        :value="locale"
      />
      <label class="btn btn-sm m-0" :for="`locale-${index}`">
        <img :src="flags[locale]" style="width: 20px" />
      </label>
    </template>
  </div>
</template>

<style scoped>
.btn-check + label {
  transition: none;
  border-radius: 10px !important;
  opacity: 50%;
}
.btn-check:hover + label {
  opacity: 80%;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2) !important;
}
.btn-check:checked + label {
  border: 1px solid rgba(0, 0, 0, 0.5) !important;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5) !important;
  opacity: 100%;
}
</style>
