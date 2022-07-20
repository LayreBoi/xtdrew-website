// import { createApp } from "vue";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "./services/router";
import xtdrew from "./services/xtdrew";

import "./App.scss";
import "./themes/main.scss";

// const app = createApp(App);
// app.use(router);
// app.mount("xtdrew-app");

export const createApp = ViteSSG(
  App,
  {
    routes
  },
  ({ app, router, routes, isClient, initialState }) => {
    xtdrew.isClient = isClient;

    if (isClient) {
      router.resolve({
        name: "404",
        params: {
          pathMatch: ["not", "found"],
        },
      }).href;

      router.beforeEach((to, from, next) => {
        if (to.meta.title) document.title = xtdrew.getWebName() + to.meta.title;
        if (!xtdrew.isClosingProject) window.scrollTo(0, 0);
        next();
      });
    }

    app.use(router);
  },
  {
    rootContainer: "xtdrew-app",
  }
);
