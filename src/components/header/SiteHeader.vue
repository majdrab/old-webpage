<template>
    <header class="header">
        <!-- <BgHeader /> -->
        <NavigationBar />
    </header>
</template>

<script>
// import BgHeader from "./components/BgHeader.vue";
import NavigationBar from "./components/NavigationBar.vue"

export default {
  name: "SiteHeader",
  components: { NavigationBar },
}
</script>

<style lang="scss">
.header {
  height: 65px;
  width: 100vw;
  position: relative;
  background: $primary;

  &::after {
    content: "";
    position: absolute;
    height: 50px;
    width: 100vw;
    background: no-repeat url('./images/bg/header-bg.svg');
    background-size: 1920px 50px;
    z-index: 1;
  }
}
</style>