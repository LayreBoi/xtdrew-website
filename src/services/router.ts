import {
  // createRouter,
  // createWebHistory,
  // Router,
  RouteRecordRaw,
} from "vue-router";
import Home from "../pages/Home.vue";
import Faq from "../pages/Faq.vue";
import NotFound from "../pages/NotFound.vue";
// import xtdrew from "./xtdrew";

// I smh had an idea to use class on every TS files in the services folder before I found out about vite-ssg.
// I'll clean this up later

class rout3r {
  public routes: RouteRecordRaw[] = [
    {
      name: "Home",
      path: "/",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      name: "FAQ",
      path: "/faq",
      component: Faq,
      meta: {
        title: "FAQ",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
      meta: {
        title: "Oops!",
      },
      name: "404",
    },
  ];

  // public router: Router = (() => {
  //   const routes = this.routes;
  //   return createRouter({
  //     history: createWebHistory(),
  //     routes,
  //   });
  // })();

  // constructor() {
  //   this.router.resolve({
  //     name: "404",
  //     params: {
  //       pathMatch: ["not", "found"],
  //     },
  //   }).href;

  //   this.router.beforeEach((to, from, next) => {
  //     if (to.meta.title) document.title = xtdrew.getWebName()+to.meta.title;
  //     if (!xtdrew.isClosingProject)
  //       window.scrollTo(0, 0);
  //     next();
  //   });
  // }
}

// export default new rout3r().router;

const rout = new rout3r();

export const routes = rout.routes;
// export default rout.router;
