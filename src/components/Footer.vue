<template>
  <xtdrew-footer>
    <xtdrew-text>
      <xtdrew-f
        >Website made by xtdrew, source code:
        <a
          href="https://github.com/layreboi/xtdrew-website"
          title="Website repository in GitHub"
          target="_blank"
          >GitHub</a
        >
        <span style="color: var(--color-yellow)" v-html="devfoot"></span>
        <span style="color: var(--color-red)"><noscript> // This site works best with JS enabled!</noscript></span>
      </xtdrew-f>
    </xtdrew-text>
  </xtdrew-footer>
</template>

<style scoped lang="scss">
xtdrew-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: var(--xtdrew-footer-bg);
  color: var(--xtdrew-footer-fg);
  transition: all 0.2s ease;

  //   position: absolute;
  //   bottom: 0px;
  width: 100%;

  xtdrew-text {
    width: 80%;
    max-width: 1280px;

    @media screen and (max-width: 720px) {
      & {
        width: 95%;
        max-width: initial;
      }
    }

    display: flex;
    align-items: center;
    height: 60px;

    xtdrew-f {
      display: block;
      a {
        color: var(--xtdrew-footer-fg);
        &:visited {
          color: var(--xtdrew-footer-lk);
        }

        @media (hover: hover) and (pointer: fine) {
          transition: all 0.25s ease;
          &:hover {
            transition: all 0.25s ease;
            transform: translateY(-2px);
            color: var(--xtdrew-footer-lv);
          }
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import xtdrew from "../services/xtdrew";
const dev: boolean = xtdrew.getDevEnvironment();
const devfoot: string = dev
  ? ` // <span style="color: var(--color-red); font-weight: bolder;">DEVELOPMENT</span> BUILD`
  : "";
</script>
