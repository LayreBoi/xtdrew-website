import { createApp } from "vue";
import App from "./App.vue";
import router from "./services/router";

import "./App.scss";
import "./themes/main.scss";

const app = createApp(App);
app.use(router);
app.mount("xtdrew-app");