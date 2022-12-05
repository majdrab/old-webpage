<template>
    <button class="project-thumbnail">
        <MajContainer centerY class="project-thumbnail__top">
            <img
                v-if="project.image"
                :src="project.image"
                alt="Project preview image"
            >
            <ProjectThumbnailSvg 
                :id="project.id"
            />
        </MajContainer>
        <MajContainer centerX class="project-thumbnail__bottom">
            <MajTitle is="h3" class="project-thumbnail__bottom-name">{{ project.name }}</MajTitle>
        </MajContainer>
    </button>
</template>

<script>
import ProjectThumbnailSvg from "./ProjectThumbnailSvg.vue";


export default {
  name: "ProjectThumbnail",
  components: { ProjectThumbnailSvg },
  props: {
    project: { type: Object, default: () => {} }
  }
}
</script>

<style lang="scss">

.project-thumbnail {
  max-width: 500px;
  aspect-ratio: 5 / 4;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  background: $primary;

  &__top {
    width: 100%;
    height: 70%;
    position: relative;
    .project-svg-0 {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 30px;
      width: 100%;
    }
  }
  &__bottom {
    width: 100%;
    height: 30%;
    position: relative;
    background: $light;
    padding: 0 50px;

    &-name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: $primary;
    }
  }
  &:hover {
    .project-thumbnail-svg__secondary {
      opacity: 0.3;
      transform: translateY(0px);
    }
    .project-thumbnail-svg__light-secondary {
      opacity: 0.6;
      transform: translateY(0px);
    }
  }
}
</style>
