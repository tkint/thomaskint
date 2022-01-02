import { createI18n } from "vue-i18n";
import frMessages from "./locales/fr.json";
import enMessages from "./locales/en.json";

export default createI18n({
  legacy: false,
  locale: "fr",
  fallbackLocale: "en",
  messages: {
    fr: frMessages,
    en: enMessages,
  },
});
