<template>
    <footer class="footer">
        <BgFooter />
        <FooterContent />
    </footer>
</template>

<script>
import BgFooter from "./components/BgFooter.vue";
import FooterContent from "./components/FooterContent.vue"

export default {
  name: "SiteFooter",
  components: { BgFooter, FooterContent },
}
</script>

<style lang="scss">
.footer {
  height: 150px;
  position: relative;
  bottom: 0;
  // margin-top: auto;
  overflow: hidden;
}
</style>