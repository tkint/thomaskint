import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import moment from 'moment';

import './assets/styles/main.scss';
import './initFontAwesomeIcon';

import App from './App.vue';
import router from './router';
import BlogWrapper from './components/blog/BlogWrapper.vue';

const app = createApp(App);

app.use(router);

app.config.globalProperties.$filters = {
    date(value: string | null, withHour: boolean = true) {
        if (!value) return value;
        if (withHour) {
            return moment(value).format('DD/MM/YYYY à HH:mm');
        }
        return moment(value).format('DD/MM/YYYY');
    },
};

app.component('BlogWrapper', BlogWrapper);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app');
