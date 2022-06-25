<template>
  <xtdrew-error>
    <xtdrew-e-container>
      <xtdrew-e-img>
        <xtdrew-e-lillie />
        <xtdrew-e-code>404</xtdrew-e-code>
      </xtdrew-e-img>
      <xtdrew-e-p> Page not found </xtdrew-e-p>
    </xtdrew-e-container>
  </xtdrew-error>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      path: "/",
    };
  },
  mounted() {
    this.path = this.$route.fullPath;
  },
});
</script>

<style scoped lang="scss">
xtdrew-error {
  background-color: #fff;
  justify-content: center;
  align-items: center;
  xtdrew-e-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: calc(100vh - 60px);
    @media screen and (max-width: 720px) {
      & {
        width: 95%;
      }
    }
    xtdrew-e-img {
      display: flex;
      position: relative;
      width: 300px;
      height: 300px;
      overflow: hidden;
      border-radius: 27px;
      justify-content: center;
      align-items: center;
      xtdrew-e-lillie {
        width: 200px;
        height: 200px;
        background: {
          image: url("https://media.discordapp.net/attachments/812779208338178101/990037385192566934/Untitled127_20220625013445.png");
          size: cover;
          color: #fff;
        }
        transform: scale(1.9);
        transition: all 0.25s ease;

        box-shadow: inset 20px 20px 60px #fff, inset -20px -20px 60px #fff;

        @media (hover: hover) and (pointer: fine) {
          &:hover {
            box-shadow: inset 20px 20px 60px #ccc, inset -20px -20px 60px #fff;
          }
        }
      }
      xtdrew-e-code {
        display: flex;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 30px;
        font-size: 30px;
        font-weight: bolder;
      }
    }
  }
}
</style>
