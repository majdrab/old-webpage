<template>
    <svg class="left-svg" viewBox="0 0 100 1080" xmlns="http://www.w3.org/2000/svg">
        <path class="left-svg__1" d="M100,1080s-1.3-39.16-1.62-48-.65-26.21-2.28-42.55-4.87-51.75-3.57-62.3-.6-28.6-.3-35.75-.3-46.63,0-61.95.62-58.56-1.65-69.79-6.17-65.36-6.17-78-2-36.08-1.62-39.83,1.55-7.49,0-10.55-3.86-32.68-2.56-35.75-1.1-5.78-.39-10.21S82.46,573.1,83.11,567s.32-16,1.3-20.77S82.79,520.33,82.14,506s2.27-58.89,2.27-69.1,4.22-21.79,3.25-26.56,3.57-22.13,3.57-31.32-2.14-15-1.4-26.89,2.7-23.15,3.67-26.55,4.88-6.81,3.25-11.58-8-29.62-6.92-35.74.23-20.43,0-27.92-4.06-46.21-5.68-52-1.18-28.17.76-35.66,4.2-39.83,2.9-44.93S89.68,87.14,89.68,81s4.51-28,4.51-33.79a144.15,144.15,0,0,1,2.72-23C98.21,18.12,100,0,100,0H0V1080Z"/>
    </svg>
</template>

<script>
export default {
  name: "LeftSvg"
}
</script>

<style lang="scss">
.left-svg {
  position: fixed;
  top: 0;
  left: 0; 
  // width: 120px;
  height: 100%;
  z-index: 1;

  &__1 {
    fill: $primary;
  }
  @media screen and ($mediaM) {
    display: none;
  }
}
</style>
