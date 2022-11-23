<template>
    <p class="maj-paragraph" :style="{'margin-top: 20px;' : margin}" >
        <slot></slot>
    </p>
</template>

<script>
export default {
  name: "MajParagraph",
  props: {
    margin: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss">
p.maj-paragraph {
  font-size: 1.1rem;
  line-height: 1.25rem;
  font-weight: 400;
}
</style>
