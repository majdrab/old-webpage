<template>
    <footer class="footer">
        <!-- <BgFooter /> -->
        <FooterContent />
    </footer>
</template>

<script>
// import BgFooter from "./components/BgFooter.vue";
import FooterContent from "./components/FooterContent.vue"

export default {
  name: "SiteFooter",
  components: { FooterContent },
}
</script>

<style lang="scss">
.footer {
  height: 100px;
  width: 100vw;
  position: relative;
  background: $primary;

  &::before {
    content: "";
    position: absolute;
    top: -30px;
    height: 30px;
    width: 100vw;
    background: no-repeat url('./images/bg/footer-bg.svg');
    background-size: 1920px 30px;
    z-index: 1;
  }
}
</style>