<template>
    <button class="single-project" >
        <MajContainer centerX centerY class="single-project__preview">
            <img
                v-if="project.image"
                :src="project.image"
                alt="Project preview image"
            >
        </MajContainer>
        <MajContainer centerX class="single-project__info">
            <MajParagraph is="h4" class="single-project__info-name">{{ project.name }}</MajParagraph>
        </MajContainer>
    </button>
</template>

<script>

export default {
  name: "SingleProject",
  props: {
    project: { type: Object, default: () => {} },
  }
}
</script>

<style lang="scss">

.single-project {
  max-width: 252px;
  max-height: 252px;
  width: 100%;
  height: 100% ;
  position: relative;
  border-radius: $borderRadius;
  background: transparent;
  border: 1px solid transparent;
  font-family: inherit;
  cursor: pointer;
  overflow: hidden;
  transition: border 0.3s;

  &__preview {
    width: 100%;
    height: 100%;
  }
  &__info {
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0;
    bottom: -50px;
    background: transparent;
    padding: 0 20px;
    border-top: 1px solid transparent;
    transition: bottom 0.3s, background 0.3s;

    &-name {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: $dark;
    }
  }
  &:hover {
    border: 1px solid $secondary;
    .single-project__info {
      background: rgba($light, 0.80);
      border-top: 1px solid $secondary;
      bottom: 0;
    }
  }
}
</style>
