import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import '@/assets/styles/main.scss';
import '@/initFontAwesomeIcon';

import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

app.use(router);

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
