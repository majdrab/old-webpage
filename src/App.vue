<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>
    
    <NavigationBar />
    <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router"
import NavigationBar from "@/components/NavigationBar.vue"

export default {
  components: { NavigationBar },
  data () {
    return {
      
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>