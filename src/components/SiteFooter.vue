<template>
    <footer class="footer">
        <BotLeftSvg />
        <BotRightSvg />
        <FooterContent />
    </footer>
</template>

<script>
import BotLeftSvg from "./BgSvgs/BotLeftSvg.vue";
import BotRightSvg from "./BgSvgs/BotRightSvg.vue";
import FooterContent from "./footer/FooterContent.vue"

export default {
  name: "SiteFooter",
  components: { FooterContent, BotLeftSvg, BotRightSvg },
}
</script>

<style lang="scss">
.footer {
  width: 100vw;
  position: relative;
}
</style>