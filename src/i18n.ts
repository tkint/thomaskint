import { createI18n } from 'vue-i18n';
import frMessages from '@/locales/fr.json';
import enMessages from '@/locales/en.json';
import useCookies from '@/composables/useCookies';

const cookies = useCookies();
export const localeCookieKey = 'locale';
export const locales = ['fr', 'en'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

export default createI18n({
  legacy: false,
  locale: cookies.get(localeCookieKey) || defaultLocale,
  fallbackLocale: defaultLocale,
  messages: {
    fr: frMessages,
    en: enMessages,
  },
});
