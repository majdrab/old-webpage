<template>
    <SiteHeader />
    <RouterView />
    <SiteFooter />
</template>

<script>
import { RouterLink, RouterView } from "vue-router"

import SiteHeader from "./components/header/SiteHeader.vue";
import SiteFooter from "./components/footer/SiteFooter.vue";

export default {
  components: { SiteHeader, SiteFooter },
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>