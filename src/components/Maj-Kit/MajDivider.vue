<template>
    <div 
        :class="['maj-divider', 'maj-divider__' + ( vertical ? 'vertical' : 'horizontal')]"
        :style="getMargin()"
    >
    </div>
</template>

<script>
export default {
  name: "MajDivider",
  props: {
    vertical: { type: Boolean, default: false },
    margin: { type: String, default: "24px" }
  },
  // created () {
  //   this.getMargin ()
  // },
  methods: {
    getMargin () {
      if (this.vertical) return "margin: 0 " + this.margin + ";"
      else return "margin: " + this.margin + " 0;"
    }
  }
}
</script>

<style lang="scss">
.maj-divider {
  background: $dark;
  &__horizontal {
    height: 2px;
    // width: 100%;
  }
  &__vertical {
    min-width: 2px;
    // height: 100%;
  }
}
</style>
