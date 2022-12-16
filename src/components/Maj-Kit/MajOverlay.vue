<template>
    <transition name="fade">
        <div
            v-if="visible"
            class="maj-overlay"
            :style="{ 'background-color': `rgba(21, 23, 54, ${opacity / 100})`}"
            @click="$emit('close')"
        />
    </transition>
</template>

<script>
export default {
  name: "MajOverlay",
  props: {
    visible: { type: Boolean, default: null },
    opacity: { type: Number, default: 60 }
  }
}
</script>

<style lang="scss">
.maj-overlay {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
</style>
