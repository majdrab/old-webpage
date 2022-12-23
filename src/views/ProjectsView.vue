<template>
    <MajContainer centerY class="projects">
        <MajContainer class="projects__container">
            <ProjectThumbnail
                v-for="project in projects"
                :key="project.id"
                :project="project"
            />
        </MajContainer>
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
  padding: 70px 100px 30px;
  flex-grow: 1;
  background: $lavender;
  &__container {
    display: grid;
    max-width: 80%;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    align-content: flex-start;
    @media screen and ($mediaL) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and ($mediaS) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media screen and ($mediaS) {
    padding: 70px 0 30px;
  }
}
</style>
