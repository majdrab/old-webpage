<template>
    <svg class="project-thumbnail-svg" viewBox="0 0 500 30" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path class="project-thumbnail-svg__secondary" d="M0 15L10.5 16C21 17 42 19 62.8 17.8C83.7 16.7 104.3 12.3 125.2 11.2C146 10 167 12 187.8 12.3C208.7 12.7 229.3 11.3 250.2 11.3C271 11.3 292 12.7 312.8 14.3C333.7 16 354.3 18 375.2 18.2C396 18.3 417 16.7 437.8 15.5C458.7 14.3 479.3 13.7 489.7 13.3L500 13L500 31L489.7 31C479.3 31 458.7 31 437.8 31C417 31 396 31 375.2 31C354.3 31 333.7 31 312.8 31C292 31 271 31 250.2 31C229.3 31 208.7 31 187.8 31C167 31 146 31 125.2 31C104.3 31 83.7 31 62.8 31C42 31 21 31 10.5 31L0 31Z"></path>
            <path class="project-thumbnail-svg__light" d="M0 20L10.5 19.8C21 19.7 42 19.3 62.8 19.5C83.7 19.7 104.3 20.3 125.2 21.2C146 22 167 23 187.8 22C208.7 21 229.3 18 250.2 17.2C271 16.3 292 17.7 312.8 19C333.7 20.3 354.3 21.7 375.2 22.3C396 23 417 23 437.8 21.7C458.7 20.3 479.3 17.7 489.7 16.3L500 15L500 31L489.7 31C479.3 31 458.7 31 437.8 31C417 31 396 31 375.2 31C354.3 31 333.7 31 312.8 31C292 31 271 31 250.2 31C229.3 31 208.7 31 187.8 31C167 31 146 31 125.2 31C104.3 31 83.7 31 62.8 31C42 31 21 31 10.5 31L0 31Z"></path>
        </g>
    </svg>
</template>

<script>
export default {
  name: "ProjectThumbnailSvg",
  props: {
    id: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
.project-thumbnail-svg {
  position: absolute;
  bottom: 0;
  &__secondary {
    fill:#00c894; 
    opacity:0;
    transform: translateY(20px);
    transition: all 0.3s;
  }
  &__light {
    fill:#F1EDFF;
  }
}

</style>
