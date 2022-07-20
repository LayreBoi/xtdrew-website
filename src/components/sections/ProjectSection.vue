<template>
  <xtdrew-section id="ProjectSection">
    <xtdrew-conts>
      <xtdrew-title>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="752.001"
          height="80"
          viewBox="0 0 752.001 80"
        >
          <path
            id="Projects"
            d="M617,105H565.8A12.8,12.8,0,0,1,553,92.2V89h64V73H553V37.8A12.8,12.8,0,0,1,565.8,25h54.4A12.8,12.8,0,0,1,633,37.8V41H569V57h64V92.2A12.8,12.8,0,0,1,620.2,105Zm-128,0V41H457V37.8A12.8,12.8,0,0,1,469.8,25h54.4A12.8,12.8,0,0,1,537,37.8V41H505v64Zm-115.2,0A12.8,12.8,0,0,1,361,92.2V37.8A12.8,12.8,0,0,1,373.8,25h54.4A12.8,12.8,0,0,1,441,37.8V41H377V89h64v3.2A12.8,12.8,0,0,1,428.2,105Zm-96,0A12.8,12.8,0,0,1,265,92.2V89h80v3.2A12.8,12.8,0,0,1,332.2,105Zm-96,0A12.8,12.8,0,0,1,169,92.2V89h64V25h3.2A12.8,12.8,0,0,1,249,37.8V92.2A12.8,12.8,0,0,1,236.2,105Zm-96,0A12.8,12.8,0,0,1,73,92.2V37.8A12.8,12.8,0,0,1,85.8,25h54.4A12.8,12.8,0,0,1,153,37.8V92.2A12.8,12.8,0,0,1,140.2,105ZM89,89h48V41H89ZM25,105V73H-23V57H41V41H-23V37.8A12.8,12.8,0,0,1-10.2,25H44.2A12.8,12.8,0,0,1,57,37.8V73H41v32Zm-131.2,0A12.8,12.8,0,0,1-119,92.2V37.8A12.8,12.8,0,0,1-106.2,25h54.4A12.8,12.8,0,0,1-39,37.8V73h-64v32Zm3.2-48h48V41h-48ZM273,73V57h64V73Zm-8-32V37.8A12.8,12.8,0,0,1,277.8,25h54.4A12.8,12.8,0,0,1,345,37.8V41Z"
            transform="translate(119 -25)"
          />
        </svg>
        <p>Here are my projects you can check out:</p>
      </xtdrew-title>
      <xtdrew-prjlist>
        <a 
          v-if="!isClient"
          v-for="prj of projects"
          :key="prj.name+'-ns'"
          :title="prj.name"
          :href="getLink(prj)"
          target="_blank"
          class="xtdrew-nsa"
        >
          <xtdrew-project 
            :style="`--cover: url('${prj.cover}')`"
          />
        </a>
        <xtdrew-project
          v-else
          v-for="prj of projects"
          :key="prj.name"
          :style="`--cover: url('${prj.cover}')`"
          :title="prj.name"
          v-on:click="openProject(prj)"
        />
      </xtdrew-prjlist>
    </xtdrew-conts>
  </xtdrew-section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import xtdrew from "../../services/xtdrew";
import Emily from "../../services/events";

const isClient = typeof window !== 'undefined';

export default defineComponent({
  name: "ProjectSection",
  data() {
    return {
      projects: xtdrew.projects,
      isClient: isClient,
    };
  },
  methods: {
    openProject(project: Project) {
      Emily.emit<Project>("openProject", project);
    },
    getLink(project: Project) {
      var link = project.link;
      return typeof link != "string" ? link[0].link : link
    }
  },
  components: {},
  mounted() {
    setTimeout(() => {
      if (this.$route.query.p) {
        for (var i in this.projects) {
          if (
            this.projects[i].name.toLowerCase().replaceAll(' ', '-') ==
            this.$route.query.p.toString().toLowerCase()
          ) {
            this.openProject(this.projects[i]);
          }
        }
      }
    }, 250);
  },
});
</script>

<style scoped lang="scss">
@import "./section.scss";

xtdrew-section {
  xtdrew-conts {
    xtdrew-prjlist {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 40px;

      .xtdrew-nsa {
        width: 200px;
        height: 200px;
      }

      xtdrew-project {
        display: block;
        width: 200px;
        height: 200px;

        cursor: pointer;

        @media screen and (max-width: 720px) {
          width: 150px;
          height: 150px;
        }

        border-radius: 9px;
        transition: all 0.25s ease;
        background: {
          color: var(--xtdrew-light2);
          image: var(--cover);
          size: cover;
        }

        &:hover {
          transition: all 0.25s ease;
          transform: translateY(-5px);
          box-shadow: 0px 5px 0px var(--xtdrew-project-sd);
        }
      }
    }
  }
}
</style>
