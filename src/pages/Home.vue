<template>
  <xtdrew-home id="TopSection">
    <TopSection />
    <ProjectSection />
    <AboutSection />
    <ContactSection />
  </xtdrew-home>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AboutSection from "../components/sections/AboutSection.vue";
import ProjectSection from "../components/sections/ProjectSection.vue";
import ContactSection from "../components/sections/ContactSection.vue";
import TopSection from "../components/sections/TopSection.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopSection,
    ProjectSection,
    AboutSection,
    ContactSection,
  },
});
</script>

<style scoped lang="scss">
xtdrew-home {
  xtdrew-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
</style>
