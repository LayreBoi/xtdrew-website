<template>
  <xtdrew-section :style="`--height: ${devHeight}px;`">
    <xtdrew-welcome>
      <svg xmlns="http://www.w3.org/2000/svg" width="1222.871" height="114.214" viewBox="0 0 1222.871 114.214"><path id="xtdrew-logo" d="M435.785,114.214,410.76,58.994V55.221L435.941,0h31.03L441.33,56.992l25.641,57.222Zm-102.1,0,25.641-56.992L333.685,0h31.184l25.025,55.221v3.773l-25.179,55.221Zm-151.17,0V16.088H162.386v98.126H144.061V16.088H126.075L107.691,57.107l22.9,51.1,2.694,5.987h-.011l.011.024H0l.011-.024H0L25.584,57.107,0,.024H.011L0,0H214.394q61.061,0,61.061,55.674,0,26.443-16.94,42.491t-45.43,16.049Zm18.249-52.777V98.205h14.63q19.327,0,30.068-10.991T256.2,56.152q0-40.063-40.116-40.063H200.763ZM54.466,51.389l1.742,3.82v3.8l-1.8,3.938L38.719,97.568H94.556L77.076,59.005v-3.8l17.48-38.563H38.719Zm1117.431,60.9-21.021-77.247a52.81,52.81,0,0,1-1.617-10.782h-.308a52.325,52.325,0,0,1-1.848,10.629l-21.1,77.4h-21.176L1073.955,1.848h20.1l20.019,80.867a58.892,58.892,0,0,1,1.54,10.628H1116a60.339,60.339,0,0,1,2.156-10.628l22.637-80.867h18.866L1180.6,83.331a63.508,63.508,0,0,1,1.617,9.858h.308a60.506,60.506,0,0,1,1.77-10.166l19.635-81.175h18.942l-30.26,110.44Zm-221.989,0,.078-16.25h74.458v16.25Zm-68.452,0L863.823,82.715a61.82,61.82,0,0,0-4.659-6.97,28.022,28.022,0,0,0-4.62-4.736,15.581,15.581,0,0,0-5.121-2.7,21.317,21.317,0,0,0-6.237-.847H835.8v44.822H817.546V1.848H853.89A52.538,52.538,0,0,1,868.211,3.7a33.317,33.317,0,0,1,11.4,5.583,26.053,26.053,0,0,1,7.584,9.319,29.349,29.349,0,0,1,2.734,13.054A31.978,31.978,0,0,1,888.193,42.4a27.937,27.937,0,0,1-4.928,8.7,30.116,30.116,0,0,1-7.7,6.507,38.459,38.459,0,0,1-10.125,4.159v.309a28.44,28.44,0,0,1,5.236,3.736q2.232,2.041,4.235,4.2a50.217,50.217,0,0,1,3.965,4.89q1.963,2.733,4.35,6.354l19.635,31.037ZM835.8,52.6h15.245a22.576,22.576,0,0,0,7.815-1.309,17.874,17.874,0,0,0,6.2-3.773,17.082,17.082,0,0,0,4.081-6.008,20.6,20.6,0,0,0,1.463-7.932q0-7.933-5.005-12.4t-14.4-4.466H835.8ZM661.086,112.288V1.848h31.877q61.061,0,61.061,53.834,0,25.569-16.94,41.088t-45.429,15.518Zm18.249-15.48h14.63q19.327,0,30.068-10.628t10.742-30.036q0-38.738-40.117-38.738H679.334Zm-127.819,15.48V17.406H519.869V1.848h81.7V17.406H569.842v94.883ZM962.769,64.462V48.828h48.818V64.462ZM951.912,17.945V1.848h70.531v16.1Z" /></svg>
      <p>
        Hi, I'm xtdrew, a young programmer. I develop frontend applications and
        discord bots.<br />Scroll down to know more about me!
      </p>
    </xtdrew-welcome>
  </xtdrew-section>
</template>

<style scoped lang="scss">
xtdrew-section {
  height: calc(var(--height) - 60.0001px); // trell

  xtdrew-welcome {
    text-align: center;
    color: var(--xtdrew-dark1);

    svg {
      height: 70px;
      width: auto;
      fill: var(--xtdrew-dark1);
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

    @media screen and (max-width: 720px) {
      transform: translateY(-50px);
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopSection",
  mounted() {
    window.addEventListener("resize", this.updateHeight);
  },
  unmounted() {
    window.removeEventListener("resize", this.updateHeight);
  },
  data() {
    return {
      devHeight: window.innerHeight,
    };
  },
  methods: {
    updateHeight(): void {
      this.devHeight = window.innerHeight;
    },
  },
});
</script>
