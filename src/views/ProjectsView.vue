<template>
    <MajContainer centerY class="projects">
        <ProjectThumbnail
            v-for="project in projects"
            :key="project.id"
            :project="project"
        />
    </MajContainer>
</template>

<script>
import ProjectThumbnail from "@/components/projects/ProjectThumbnail.vue"
import projectsData from "@/data/projectsData.json"

export default {
  name: "ProjectsView",
  components: { ProjectThumbnail },
  data() {
    return {
      projects: projectsData
    }
  }
}
</script>

<style lang="scss">
.projects {
  width: 100vw;
  padding: 50px 0 30px;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 20px;
  background: $lavender;
}
</style>
