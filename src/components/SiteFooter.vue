<template>
    <footer class="footer">
        <BotLeftSvg />
        <ShroomsLeft />
        <BotRightSvg />
        <ShroomsRight />
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
import ShroomsLeft from "./BgSvgs/DetailSvgs/ShroomsLeft.vue";
import ShroomsRight from "./BgSvgs/DetailSvgs/ShroomsRight.vue";

export default {
  name: "SiteFooter",
  components: { BotLeftSvg, BotRightSvg, BotSvg, ShroomsLeft, ShroomsRight },
}
</script>

<style lang="scss">
.footer {
  width: 100vw;
  position: relative;
  background: $primary;

  .contact-links {
    padding-bottom: 5px;
    display: none;
    @media screen and ($mediaM) {
      display: flex;
    }
  }
  &__rights {
    color: $light;
    padding-bottom: 10px;
    font-weight: 300;
    text-align: center;
  }
}
</style>