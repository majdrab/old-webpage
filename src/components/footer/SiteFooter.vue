<template>
    <footer>
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

</style>