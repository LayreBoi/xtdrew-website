<template>
  <xtdrew-container :style="`--mobile: ${mobile ? '85' : '60'}px`">
    <Header />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </xtdrew-container>
  <Footer />
  <ProjectWindow :projectWatch="currentProject" />
  <NoScriptWarn />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ProjectWindow from "./components/ProjectWindow.vue";
import NoScriptWarn from "./components/NoScriptWarn.vue";

import EvMgmt from "./services/events";
import xtdrew from "./services/xtdrew";
import devconsole from "./services/devconsole";

// type issues :pensive:
type WebData = {
  mobile: boolean;
  currentProject: Project | null;
};

export default defineComponent({
  name: "app",
  components: {
    Header,
    Footer,
    ProjectWindow,
    NoScriptWarn
},
  data() {
    // type issues :pensive:
    const dd: WebData = {
      mobile: false,
      currentProject: null,
    };

    return dd;
  },
  methods: {
    resize(): void {
      xtdrew.checkMobile(window.innerWidth);
      this.mobile = xtdrew.isMobile;
    },
    async openWindow(project: Project) {
      devconsole?.log("Received an event!");
      const run = async () => {
        return new Promise<void>((pepe) => {
          this.currentProject = project;
          setTimeout(() => pepe, 100);
        });
      };

      await run();
    },
    closeWindow() {
      this.currentProject = null;
      devconsole?.log("Value has been changed to null");
    },
  },
  mounted() {
    // change scroll behavior to smooth
    const doc = document.getElementsByTagName("html")[0];
    doc.style.scrollBehavior = "smooth";

    // change size of something for mobile users
    xtdrew.checkMobile(window.innerWidth);
    this.mobile = xtdrew.isMobile;
    window.addEventListener("resize", this.resize);

    // remind users when opening dev tools
    console.log(
      `%c Yo, hold up!`,
      "font-size: 32px; font-weight: bolder; color: #ff3392"
    );
    console.log(
      `What's up, curious developer? I've noticed you've opened the developer tools. If you're curious about how this website is made, you can check out in my open-source repository at https://github.com/layreboi/xthedrew-website`
    );

    // listen to events
    EvMgmt.listen("openProject", (prj) => this.openWindow(prj));
    EvMgmt.listen("closeProject", () => this.closeWindow());
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resize);
    EvMgmt.stop("openProject", (prj) => this.openWindow(prj));
    EvMgmt.stop("closeProject", () => this.closeWindow());
  }
});
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out, height 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

body::-webkit-scrollbar {
  width: 5px;
}
body::-webkit-scrollbar-track {
  background: #00000000;
  transition: all 0.25s ease;
}
body::-webkit-scrollbar-thumb {
  background-color: var(--xtdrew-main-scrollbar);
  border-radius: 20px;
  border: 5px solid #00000000;
  transition: all 0.25s ease;
}

body {
  height: 100vh;
  overflow: overlay;
  background-color: var(--xtdrew-light1);
  xtdrew-app {
    width: 100%;
    // min-height: 100vh;
    height: 100%;
    xtdrew-container {
      width: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      xtdrew-home,
      xtdrew-faq,
      xtdrew-error {
        display: flex;
        flex-direction: column;
        padding-top: var(--mobile);
        width: 100%;
      }
      padding-bottom: 60px;
    }
    padding-bottom: 60px;
    xtdrew-footer {
      position: relative;
      margin-top: -60px;
    }
  }
}
</style>
