import { createI18n } from "vue-i18n";
import frMessages from "@/locales/fr.json";
import enMessages from "@/locales/en.json";
import useCookies from "@/composables/useCookies";

const cookies = useCookies();
export const localeCookieKey = "locale";

export default createI18n({
  legacy: false,
  locale: cookies.get(localeCookieKey) || "fr",
  fallbackLocale: "fr",
  messages: {
    fr: frMessages,
    en: enMessages,
  },
});
