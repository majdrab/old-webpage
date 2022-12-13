<template>
    <SiteEnvironment />
    <SiteHeader />
    <router-view v-slot="{Component}">
        <transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.path" />
        </transition>
    </router-view>
    <SiteFooter />
</template>

<script>
import { RouterLink, RouterView } from "vue-router"

import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteEnvironment from "./components/SiteEnvironment.vue";

export default {
  components: { SiteHeader, SiteFooter, SiteEnvironment },
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
@media screen and ($mediaL) {

}
@media screen and ($mediaM) {

}
@media screen and ($mediaS) {
  
}
@media screen and ($mediaXS) {

}
</style>