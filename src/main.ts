import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import dayjs from "dayjs";
import fr from "dayjs/locale/fr";
import customParseFormat from "dayjs/plugin/customParseFormat";

import App from "./App.vue";
import router from "./router";
import { Icons } from "./data/icons";

Object.values(Icons).forEach((icon) => {
  library.add(icon);
});

dayjs.locale(fr);
dayjs.extend(customParseFormat);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
