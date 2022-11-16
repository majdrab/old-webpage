<template>
    <div :class="[
        'maj-container maj-container--' + ( horizontal ? 'horizontal' : 'vertical'),
        {'maj-container--centerX': centerX},
        {'maj-container--centerY': centerY}
    ]">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "MajContainer",
  props: {
    horizontal: { type: Boolean, default: false },
    centerX: { type: Boolean, default: false },
    centerY: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss">
.maj-container {
  display: flex;
  flex-grow: 1;

  &--vertical {
    flex-direction: column;
  }
  &--horizontal {
    flex-direction: row;
  }
  &--centerX {
    align-items: center;
  }
  &--centerY {
    justify-content: center;
  }
}
</style>
