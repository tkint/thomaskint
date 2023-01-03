import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import dayjs from 'dayjs';
import fr from 'dayjs/locale/fr';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import App from '@/App.vue';
import router from '@/router';
import i18n from '@/i18n';
import { Icons } from '@/data/icons';

library.add(...Object.values(Icons));

dayjs.locale(fr);
dayjs.extend(customParseFormat);

createApp(App).use(router).use(i18n).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
