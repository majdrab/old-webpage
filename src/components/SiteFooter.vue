<template>
    <footer class="footer">
        <BotLeftSvg />
        <BotRightSvg />
        <BotSvg />
        <ContactLinks />
        <MajParagraph class="footer__rights">
            Copyright © 2022 Maj Drab, All Rights Reserved
        </MajParagraph>
    </footer>
</template>

<script>
import BotLeftSvg from "./BgSvgs/BotLeftSvg.vue";
import BotRightSvg from "./BgSvgs/BotRightSvg.vue";
import BotSvg from "./BgSvgs/BotSvg.vue";

export default {
  name: "SiteFooter",
  components: { BotLeftSvg, BotRightSvg, BotSvg },
}
</script>

<style lang="scss">
.footer {
  width: 100vw;
  height: 15px;
  position: relative;
  background: $primary;

  .contact-links {
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    display: none;
  }
  &__rights {
    position: absolute;
    color: $light;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 5px;
    font-weight: 300;
    text-align: center;
  }
}
</style>