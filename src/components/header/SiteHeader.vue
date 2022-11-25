<template>
    <header>
        <BgHeader />
        <NavigationBar />
    </header>
</template>

<script>
import BgHeader from "./components/BgHeader.vue";
import NavigationBar from "./components/NavigationBar.vue"

export default {
  name: "SiteHeader",
  components: { BgHeader, NavigationBar },
}
</script>

<style lang="scss">

</style>