<template>
  <xtdrew-dimbackground :class="{ BackgroundDimmed: showWindow }" v-if="!destroyWindow">
    <xtdrew-closearea @click="closeWindow()" />
    <xtdrew-window :class="{ WindowVisible: showWindow }">
      <xtdrew-w-title>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="492"
          height="60"
          viewBox="0 0 492 60"
        >
          <path
            id="Project"
            d="M-1911,1038V990h-24v-2.4a9.6,9.6,0,0,1,9.6-9.6h40.8a9.6,9.6,0,0,1,9.6,9.6V990h-24v48Zm-86.4,0a9.6,9.6,0,0,1-9.6-9.6V987.6a9.6,9.6,0,0,1,9.6-9.6h40.8a9.6,9.6,0,0,1,9.6,9.6V990h-48v36h48v2.4a9.6,9.6,0,0,1-9.6,9.6Zm-72,0a9.6,9.6,0,0,1-9.6-9.6V1026h60v2.4a9.6,9.6,0,0,1-9.6,9.6Zm-72,0a9.6,9.6,0,0,1-9.6-9.6V1026h48V978h2.4a9.6,9.6,0,0,1,9.6,9.6v40.8a9.6,9.6,0,0,1-9.6,9.6Zm-72,0a9.6,9.6,0,0,1-9.6-9.6V987.6a9.6,9.6,0,0,1,9.6-9.6h40.8a9.6,9.6,0,0,1,9.6,9.6v40.8a9.6,9.6,0,0,1-9.6,9.6Zm2.4-12h36V990h-36Zm-48,12v-24h-36v-12h48V990h-48v-2.4a9.6,9.6,0,0,1,9.6-9.6h40.8a9.6,9.6,0,0,1,9.6,9.6V1014h-12v24Zm-98.4,0a9.6,9.6,0,0,1-9.6-9.6V987.6a9.6,9.6,0,0,1,9.6-9.6h40.8a9.6,9.6,0,0,1,9.6,9.6V1014h-48v24Zm2.4-36h36V990h-36Zm282,12v-12h48v12Zm-6-24v-2.4a9.6,9.6,0,0,1,9.6-9.6h40.8a9.6,9.6,0,0,1,9.6,9.6V990Z"
            transform="translate(2367 -978)"
          />
        </svg>
        <xtdrew-w-name>{{ project.name }}</xtdrew-w-name>
      </xtdrew-w-title>
      <xtdrew-w-contents>
        <xtdrew-w-side>
          <xtdrew-w-cover :style="`--image: url(${project.cover})`" />
          <xtdrew-w-a-group
            v-if="Array.isArray(project.link) && isLinkJSON(project.link)"
          >
            <a
              v-for="link in project.link"
              key="link"
              :href="link.link"
              target="_blank"
              >{{ link.name }}</a
            >
          </xtdrew-w-a-group>
          <a :href="(project.link as string)" target="_blank" v-else>{{
            project.linkname
          }}</a>
        </xtdrew-w-side>
        <xtdrew-w-description>
          <xtdrew-w-p-desc
            v-html="template(convertToBR(project.description)).template"
          />
          <xtdrew-w-p-meta>
            <xtdrew-amogus
              v-html="
                project.started ? `Started: ${project.started}<br />` : ''
              "
            />
            Type: {{ project.type }}<br />
            Language: {{ project.lang }}
            <xtdrew-w-p-share
              @click="shareProject(project)"
              v-if="copySupported"
              title="Copy the project link into your clipboard"
              >{{ shared ? "Shared!" : "Share" }}</xtdrew-w-p-share
            >
          </xtdrew-w-p-meta>
        </xtdrew-w-description>
      </xtdrew-w-contents>
    </xtdrew-window>
  </xtdrew-dimbackground>
</template>

<style scoped lang="scss">
xtdrew-dimbackground {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 110;
  user-select: none;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s ease-in-out;

  xtdrew-closearea {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  &.BackgroundDimmed {
    transition: 0.5s ease-in-out;
    background-color: #00000050;
    pointer-events: auto;
    user-select: auto;
  }

  xtdrew-window {
    display: flex;
    flex-direction: column;
    background-color: var(--xtdrew-project-bg);
    width: calc(85% - 40px);
    height: calc(85% - 60px);
    transition: all 0.25s ease;

    @media only screen and (max-device-width: 768px) {
      transform: translateY(100vh);
      // visibility: hidden;
    }

    opacity: 0;
    transform: scale(1.2);

    &.WindowVisible {
      transition: all 0.25s ease;

      @media only screen and (max-device-width: 768px) {
        transform: translateY(0);
        // visibility: visible;
      }

      opacity: 1;
      transform: scale(1);
    }

    border-radius: 18px;
    padding: 40px;

    @media screen and (max-width: 720px) {
      width: 90%;
      padding: 40px 20px;
    }

    xtdrew-w-title {
      width: 100%;
      display: flex;
      gap: 20px;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 40px;

      xtdrew-w-name {
        font-size: 30px;
        color: var(--xtdrew-project-title);

        @media screen and (max-width: 500px) {
          font-size: 20px;
        }
      }

      svg {
        height: 60px;
        width: auto;
        fill: var(--xtdrew-project-title);
      }

      @media screen and (max-width: 770px) {
        svg {
          height: 50px;
          width: auto;
        }
      }

      @media screen and (max-width: 600px) {
        svg {
          height: 25px;
          width: auto;
        }
      }
    }

    xtdrew-w-contents {
      display: flex;
      flex-direction: row;
      height: 100%;
      overflow: auto;
      border-radius: 18px;

      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: #00000000;
        transition: all 0.25s ease;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--xtdrew-dark1);
        border-radius: 20px;
        border: 5px solid #00000000;
        transition: all 0.25s ease;
      }

      @media screen and (max-width: 855px) {
        flex-direction: column;
      }

      gap: 20px;

      xtdrew-w-description {
        display: flex;
        flex-direction: column;
        position: relative;
        gap: 20px;
        color: var(--xtdrew-dark1);

        xtdrew-w-p-desc {
          font-size: 20px;
        }

        width: 100%;

        xtdrew-w-p-meta {
          font-size: 20px;
          width: calc(100% - 26px);
          padding: 25px 13px;
          border-radius: 18px;
          background-color: var(--xtdrew-light2);

          @media screen and (min-width: 855px) {
            position: absolute;
            bottom: 0px;
          }

          xtdrew-w-p-share {
            display: block;
            padding: 0px 4px;
            border-radius: 4.5px;
            width: 100px;
            cursor: pointer;
            background-color: var(--xtdrew-light3);
            text-align: center;
            margin-top: 5px;
            transition: all 0.25s ease;

            @media (hover: hover) and (pointer: fine) {
              &:hover {
                transition: all 0.25s ease;
                transform: scale(1.05);
                letter-spacing: 2.5px;
              }
            }

            &:active {
              transition: all 0.25s ease;
              transform: scale(1.1);
            }
          }
        }
      }

      xtdrew-w-side {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 400px;

        @media screen and (max-width: 855px) {
          width: 100%;
        }

        xtdrew-w-cover {
          display: block;
          width: 400px;
          height: 400px;

          @media screen and (max-width: 855px) {
            & {
              width: 200px;
              height: 200px;
            }
          }

          background: {
            image: var(--image);
            size: cover;
            color: var(--xtdrew-light2);
          }

          border-radius: 18px;
        }

        gap: 40px;

        xtdrew-w-a-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        a {
          width: calc(400px - 16px);

          @media screen and (max-width: 855px) {
            & {
              width: calc(200px - 16px);
            }
          }

          background-color: var(--xtdrew-light1);
          text-align: center;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: var(--xtdrew-dark1);
          border: 4px solid var(--xtdrew-light2);
          border-radius: 18px;
          font-size: 20px;
          transition: all 0.25s ease;
          -webkit-tap-highlight-color: transparent;

          @media (hover: hover) and (pointer: fine) {
            &:hover {
              transition: all 0.25s ease;
              transform: scale(1.02);
              border: 4px solid #eeeeee00;
              border-radius: 18px;
              background-color: var(--xtdrew-light2);
              letter-spacing: 5px;
            }
          }

          &:active {
            transition: all 0.25s ease;
            transform: scale(1.025);
            border: 4px solid #eeeeee00;
            border-radius: 18px;
            background-color: var(--xtdrew-light2);
          }
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import xtdrew from "../services/xtdrew";
import devconsole from "../services/devconsole";
import EvMgmt from "../services/events";
import { useClipboard } from "@vueuse/core";

export default defineComponent({
  name: "ProjectWindow",
  data() {
    return {
      project: xtdrew.exampleProject,
      showWindow: false,
      destroyWindow: true,
      timeout: setTimeout(() => {}),
      shared: false,
      copySupported: true,
    };
  },
  methods: {
    async openWindow(project: Project): Promise<void> {
      if (this.showWindow) {
        devconsole?.log("Window is already visible! Avoiding changes!");
        return;
      }

      // to avoid issues of the app not finding the window, I use async
      await (async () => {
        return new Promise<void>((res) => {
          this.destroyWindow = false;
          devconsole?.log("Window has been created.");
          res();
        });
      })().then(() => {
        const xcont = document.getElementsByTagName("xtdrew-w-contents")[0]!;
        clearTimeout(this.timeout);

        devconsole?.log("Opening window...");
        this.project = project;

        this.copySupported = this.createProjectLink(this.project).isSupported;
        xcont.scrollTo(0, 0);
        this.$router.replace({
          path: "/",
          query: { p: this.project.name.toLowerCase().replaceAll(" ", "-") },
        });
        this.showWindow = true;
        this.changeScrollMode(false);
      });
    },
    closeWindow(): void {
      xtdrew.closeProject();
      this.showWindow = false;
      this.timeout = setTimeout(() => {
        this.project = xtdrew.exampleProject;
        this.destroyWindow = true;
        devconsole?.log("Window has been destroyed.")
      }, 1000);
      EvMgmt.emit("closeProject");

      this.$router.replace({
        path: "/",
        query: { param: [] },
      });

      this.changeScrollMode(true);
    },
    template(str: string = "") {
      devconsole?.log(`Template received a conversion: ${str}`);
      return {
        template: `<xtdrew-w-description>${str}</xtdrew-w-description>`,
      };
    },
    convertToBR(str: string | string[]): string {
      if (typeof str === "string") {
        devconsole?.log("Description is NOT an array!");
        return str;
      } else {
        devconsole?.log("Description is an array!");
        var stri = str.join("<br />");
        devconsole?.log(stri);
        return stri;
      }
    },
    createProjectLink(project: Project) {
      const urlname = project.name.toLowerCase().replaceAll(" ", "-");
      const link = `${
        xtdrew.getDevEnvironment() ? "http://localhost" : "https://xtdrew.xyz"
      }/?p=${urlname}`;
      return useClipboard({
        source: link,
      });
    },
    shareProject(project: Project): void {
      const urlname = project.name.toLowerCase().replaceAll(" ", "-");
      const link = `${
        xtdrew.getDevEnvironment() ? "http://localhost" : "https://xtdrew.xyz"
      }/?p=${urlname}`;
      const pl = this.createProjectLink(project);
      pl.copy(link);
      devconsole?.log(`copied to clipboard: ${link}`);
      this.shared = pl.copied as unknown as boolean;
    },
    changeScrollMode(enabled: boolean): void {
      const doc = document.getElementsByTagName("html")[0];

      if (!enabled) {
        doc.style.scrollBehavior = "auto";

        const sT = window.pageYOffset || document.documentElement.scrollTop;
        const sL = window.pageXOffset || document.documentElement.scrollLeft;

        window.onscroll = function () {
          window.scroll({
            top: sT,
            left: sL,
            behavior: "auto",
          });
        };
      } else {
        doc.style.scrollBehavior = "smooth";

        window.onscroll = function () {};
      }

      devconsole?.log(`Scrolling ${enabled ? "enabled" : "disabled"}!`);
    },
    isLinkJSON(link: string | LinkJSON[]): boolean {
      var isit = typeof link != "string";
      devconsole?.log(`Link is JSON equals ${isit}.`);
      return isit;
    },
  },
  props: ["projectWatch"],
  watch: {
    projectWatch: function (nV: Project | null, oV: Project | null) {
      devconsole?.log("Received a value change!");
      if (nV) {
        this.openWindow(nV);
      }
    },
  },
});
</script>
