<template>
  <xtdrew-header>
    <xtdrew-desktop>
      <xtdrew-nav v-if="!mobile" class="layrelol">
        <a href="https://www.layre.lol/" target="_">Socials</a>
      </xtdrew-nav>
      <xtdrew-nav v-if="!mobile">
        <a href="#" @click="scroll2Projects()">Projects</a>
      </xtdrew-nav>
      <xtdrew-logo>
        <a href="#" @click="scroll2Top()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="121.601"
            height="50.421"
            viewBox="0 0 121.601 50.421"
          >
            <path
              id="Logo"
              d="M80.573,50.421V7.1H71.688V50.421H63.6V7.1h-7.94L47.542,25.21l10.11,22.557L58.84,50.41h-.005l.005.011H0l.005-.011H0l11.294-25.2L0,.011H.005L0,0H94.645Q121.6,0,121.6,24.577q0,11.673-7.478,18.758T94.068,50.42Zm8.056-7.067h6.458q8.532,0,13.273-4.852T113.1,24.788Q113.1,7.1,95.393,7.1H88.629ZM24.045,22.686l.769,1.686v1.676l-.793,1.738L17.093,43.072h24.65L34.026,26.048V24.372L41.742,7.348H17.093Z"
            />
          </svg>
        </a>
      </xtdrew-logo>
      <xtdrew-nav v-if="!mobile">
        <router-link to="/faq">FAQ</router-link>
      </xtdrew-nav>
      <xtdrew-nav v-if="!mobile" class="discord">
        <a href="https://discord.gg/rr37RqZpeZ" target="_">Discord</a>
      </xtdrew-nav>
    </xtdrew-desktop>
    <xtdrew-mobile v-if="mobile">
      <xtdrew-nav class="layrelol">
        <a href="https://www.layre.lol/" target="_">Socials</a>
      </xtdrew-nav>
      <xtdrew-nav>
        <a href="#" @click="scroll2Projects()">Projects</a>
      </xtdrew-nav>
      <xtdrew-nav>
        <router-link to="/faq">FAQ</router-link>
      </xtdrew-nav>
      <xtdrew-nav class="discord">
        <a href="https://discord.gg/rr37RqZpeZ" target="_">Discord</a>
      </xtdrew-nav>
    </xtdrew-mobile>
  </xtdrew-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import xtdrew from "../services/xtdrew";

export default defineComponent({
  name: "Header",
  data() {
    return {
      mobile: false,
    };
  },
  methods: {
    resize(): void {
      xtdrew.checkMobile(window.innerWidth);
      this.mobile = xtdrew.isMobile;
    },
    scroll2Projects(): void {
      var notInIndex = false;

      if (!(this.$route.path && this.$route.path == "/")) {
        this.$router.push({
          path: "/",
        });
        notInIndex = true;
      }

      setTimeout(
        () => document.getElementById("ProjectSection")!.scrollIntoView(),
        notInIndex ? 300 : 0
      );
    },
    scroll2Top(): void {
      if (!(this.$route.path && this.$route.path == "/")) {
        this.$router.push({
          path: "/",
        });
      } else {
        document.getElementById("TopSection")!.scrollIntoView();
      }
    },
  },
  mounted() {
    xtdrew.checkMobile(window.innerWidth);
    this.mobile = xtdrew.isMobile;
    window.addEventListener("resize", this.resize);
  },
  unmounted() {
    window.removeEventListener("resize", this.resize);
  },
});
</script>

<style scoped lang="scss">
xtdrew-header {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  align-items: center;
  background: var(--xtdrew-light1);
  z-index: 99;

  xtdrew-mobile {
    display: flex;
    gap: 10px;
    width: 100%;
    height: 25px;
    justify-content: center;

    a {
      -webkit-tap-highlight-color: transparent;
      text-decoration: none;
      color: var(--xtdrew-dark1);
      transition: all 0.25s ease;
      font-size: 18px;
      position: relative;
      bottom: 2px;
      border-radius: 4.5px;
      padding: 0px 4px;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          transition: all 0.25s ease;
          transform: scale(1.1);
        }
      }
    }

    xtdrew-nav {
      transition: all 0.25s ease;
      color: var(--xtdrew-dark1);

      @media (hover: hover) and (pointer: fine) {
        &.discord a:hover {
          background-color: #5865f2;
          color: white;
        }

        &.layrelol {
          transition: all 0.25s ease;

          a {
            position: relative;
            z-index: 1;

            &::before {
              position: absolute;
              content: "";
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(95deg, #4b279b, #df99d8);
              z-index: -1;
              transition: opacity 0.25s ease;
              opacity: 0;
              border-radius: 4.5px;
            }

            &:hover {
              background: none;
              color: white;
            }

            &:hover::before {
              opacity: 1;
            }
          }
        }

        a:hover {
          background-color: var(--xtdrew-nav-bg);
        }
      }

      &:active {
        transition: all 0.25s ease;
        transform: scale(1.15);
      }
    }
  }
  xtdrew-desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    // left: 50%;
    // transform: translateX(-50%);
    width: 80%;
    height: 60px;

    @media only screen and (max-width: 720px) {
      & {
        width: 100%;
      }
    }

    xtdrew-nav,
    xtdrew-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      a {
        font-size: 20px;
        color: var(--xtdrew-dark1);
        text-decoration: none;
        transition: all 0.25s ease;
        padding: 0px 4px;
        width: 110px;
        cursor: pointer;

        &:active {
          transition: all 0.25s ease;
          transform: scale(1.15);
        }

        @media screen and (max-width: 720px) {
          & {
            width: auto;
          }
        }

        border-radius: 4.5px;
        -webkit-tap-highlight-color: transparent;

        @media (hover: hover) and (pointer: fine) {
          &:hover {
            transform: scale(1.1);
          }
        }
      }

      width: 110px;

      @media screen and (max-width: 720px) {
        & {
          width: auto;
        }
      }
    }

    @media (hover: hover) and (pointer: fine) {
      xtdrew-nav {
        color: var(--xtdrew-dark1);

        &.discord a:hover {
          background-color: #5865f2;
          color: white;
        }

        &.layrelol {
          transition: all 0.25s ease;

          a {
            position: relative;
            z-index: 1;

            &::before {
              position: absolute;
              content: "";
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(95deg, #4b279b, #df99d8);
              z-index: -1;
              transition: opacity 0.25s ease;
              opacity: 0;
              border-radius: 4.5px;
            }

            &:hover {
              background: none;
              color: white;
            }

            &:hover::before {
              opacity: 1;
            }
          }
        }

        a:hover {
          background-color: var(--xtdrew-nav-bg);
          transition: all 0.25s ease;
        }
      }
    }

    xtdrew-logo {
      a {
        transition: all 0.25s ease;
        fill: var(--xtdrew-dark1);
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            fill: var(--xtdrew-main);
          }
        }
        svg {
          width: 80px;
          height: auto;
          transform: translateY(2.5px);
        }
      }
    }
  }
}
</style>
