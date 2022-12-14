<template>
    <p class="maj-paragraph" :style="[`font-size: ${size}rem; line-height: ${size * 1.2}rem;`, {'margin-top: 20px;' : margin}]" >
        <slot></slot>
    </p>
</template>

<script>
export default {
  name: "MajParagraph",
  props: {
    margin: { type: Boolean, default: false },
    size: { type: Number, default: 1.1 }
  }
}
</script>

<style lang="scss">
.maj-paragraph {
  font-weight: 400;
}
</style>
