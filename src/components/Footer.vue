<template>
  <xtdrew-footer>
    <xtdrew-text>
      <xtdrew-f
        >Website made by xtdrew, source code:
        <a
          href="https://github.com/layreboi/xtdrew-website"
          title="Website repository in GitHub"
          >GitHub</a
        >
        <span style="color: #ff3392;" v-html="dev ? ' // DEVELOPMENT BUILD' : ''"></span>
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
  background-color: #171717;
  color: white;
  transition: all 0.2s ease;

  //   position: absolute;
  //   bottom: 0px;
  width: 100%;

  xtdrew-text {
    width: 80%;

    @media screen and (max-width: 720px) {
      & {
        width: 95%;
      }
    }

    display: flex;
    align-items: center;
    height: 60px;

    xtdrew-f {
      display: block;
      a {
        color: white;
        &:visited {
          color: #eee;
        }

        @media (hover: hover) and (pointer: fine) {
          transition: all 0.25s ease;
          &:hover {
            transition: all 0.25s ease;
            transform: translateY(-2px);
            color: #eaeaea;
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
</script>
