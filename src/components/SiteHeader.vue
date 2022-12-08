<template>
    <header class="header">
        <NavigationBar />
        <TopSvg />
        <!-- <TopLeftSvg /> -->
        <!-- <TopRightSvg /> -->
    </header>
</template>

<script>
import NavigationBar from "./header/NavigationBar.vue"
import TopSvg from "./BgSvgs/TopSvg.vue";
// import TopLeftSvg from "../BgSvgs/TopLeftSvg.vue";
// import TopRightSvg from "../BgSvgs/TopRightSvg.vue";

export default {
  name: "SiteHeader",
  components: { NavigationBar, TopSvg },
}
</script>

<style lang="scss">
.header {
  height: 70px;
  width: 100vw;
  position: relative;
  background: $primary;
}
</style>