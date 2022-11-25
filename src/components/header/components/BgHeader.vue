<template>
    <div class="header-bg"></div>
</template>

<script>
export default {
  name: "BgHeader"
}
</script>


<style lang="scss" scoped>
.header-bg {
  background: no-repeat url('./images/bg/header-bg.svg');
  background-size: 1920px 300px;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 200px;
  width: 100vw;
  z-index: 1;
}
</style>
