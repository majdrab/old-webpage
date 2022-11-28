<template>
    <MajContainer class="dnd" centerX centerY>
        <MajTitle is="h1">WIP</MajTitle>
    </MajContainer>
</template>

<script>
export default {
  name: "DnDView",
}
</script>

<style lang="scss">
.dnd {
  flex-grow: 1;
  background: $lPrimary;
  .maj-title {
    color: $light;
  }
}
</style>
