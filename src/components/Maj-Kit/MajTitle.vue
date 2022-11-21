<template>
    <component :is="is" class="maj-title">
        <slot></slot>
    </component>
</template>

<script>
export default {
  name: "MajTitle",
  props: {
    is: { type: String, default: "h3" },
  }
}
</script>

<style lang="scss">
h1.maj-title  {
  font-size: 5rem;
  line-height: 6rem;
  font-weight: 600;
}
h2.maj-title  {
  font-size: 3rem;
  line-height: 3.6rem;
  font-weight: 500;
}
h3.maj-title  {
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 500;
}
h4.maj-title  {
  font-size: 1.8rem;
  line-height: 2.16rem;
  font-weight: 500;
}
</style>
