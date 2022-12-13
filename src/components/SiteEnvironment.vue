<template>
    <div class="environment">
        <TopLeftSvg />
        <TopRightSvg />
        <LeftSvg />
        <RightSvg />
        <ContactLinks />
    </div>
</template>

<script>
import TopLeftSvg from "./BgSvgs/TopLeftSvg.vue";
import TopRightSvg from "./BgSvgs/TopRightSvg.vue";
import LeftSvg from "./BgSvgs/LeftSvg.vue";
import RightSvg from "./BgSvgs/RightSvg.vue";


export default {
  name: "SiteEnvironment",
  components: { TopLeftSvg, TopRightSvg, LeftSvg, RightSvg },
}
</script>

<style lang="scss">
.environment {
  height: 100vh;
  width: 100vw;
  position: absolute;
  .contact-links {
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
    
    @media screen and ($mediaS) {
      display: none;
    }
  }
}
</style>