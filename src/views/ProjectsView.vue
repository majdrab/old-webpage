<template>
    <MajContainer class="projects">
        <SingleProject
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
        />
    </MajContainer>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue"
import projectsData from "@/data/projectsData.json"

export default {
  name: "ProjectsView",
  components: { SingleProject },
  data() {
    return {
      projects: projectsData
    }
  }
  // computed: {
  // },
  // methods: {
  // }
}
</script>

<style lang="scss">
.projects {
  width: 100vw;
  height: calc(100vh - 60px);
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px;
  align-content: flex-start;
  overflow-y: auto;
}
</style>
