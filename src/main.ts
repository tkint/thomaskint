import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import dayjs from 'dayjs';
import dayjsFR from 'dayjs/locale/fr';
import dayjsEN from 'dayjs/locale/en';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import App from '@/App.vue';
import router from '@/router';
import i18n, { localeCookieKey, defaultLocale } from '@/i18n';
import { Icons } from '@/data/icons';
import useCookies from './composables/useCookies';

library.add(...Object.values(Icons));

dayjs.locale(dayjsFR);
dayjs.locale(dayjsEN);
dayjs.extend(customParseFormat);

const cookies = useCookies();
dayjs.locale(cookies.get(localeCookieKey) ?? defaultLocale);

createApp(App).use(router).use(i18n).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
