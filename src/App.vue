<template>
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

import SiteHeader from "./components/header/SiteHeader.vue";
import SiteFooter from "./components/footer/SiteFooter.vue";

export default {
  components: { SiteHeader, SiteFooter },
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>