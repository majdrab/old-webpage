<template>
    <button class="project-thumbnail">
        <MajContainer centerY class="project-thumbnail__top">
            <img
                v-if="project.image"
                :src="project.image"
                alt="Project preview image"
            >
            <ThumbnailSvg />
        </MajContainer>
        <MajContainer centerX class="project-thumbnail__bottom">
            
            <MajTitle is="h3" class="project-thumbnail__bottom-name">{{ project.name }}</MajTitle>
            
        </MajContainer>
        <div class="project-thumbnail__hover"></div>
    </button>
</template>

<script>
import ThumbnailSvg from "./ThumbnailSvg.vue";


export default {
  name: "ProjectThumbnail",
  components: { ThumbnailSvg },
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
  z-index: 2;

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
    height: 28%;
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
  &__hover {
    height: 2%;
    background: $light;
    transition: background 0.3s;
  }
  &:hover {
    .thumbnail-1-svg {
      opacity: 1;
      bottom: 0;
    }
    .thumbnail-2-svg {
      opacity: 1;
      bottom: 0;
      transition-delay: 0.1s;
    }
    .project-thumbnail__hover {
      background: $secondary;
    }
  }
}
</style>
