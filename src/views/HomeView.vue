<template>
    <MajContainer class="home" centerX centerY>
        <MajContainer class="home__container" >
            <MajDrabLogo class="home__container-logo" />
            <MajContainer vertical class="home__container-description">
                <MajTitle is="h4">I'm a junior front-end web developer and designer. Welcome to my portfolio website!</MajTitle>
                <MajTitle is="h4">The website is still a work in progress.</MajTitle>
            </MajContainer>
        </MajContainer>
    </MajContainer>
</template>

<script>
import MajDrabLogo from "@/assets/MajDrabLogo.vue"

export default {
  name: "HomeView",
  components: {MajDrabLogo},
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.home {
  width: 100vw;
  // height: calc(100vh - 70px);
  flex-grow: 1;
  &__container {
    max-width: 700px;
    &-logo {
      min-width: 200px;
      flex: 1 1 0px;
    }
    &-description {
      margin-left: 20px;
      flex: 1 1 0px;
      background: $lavender;
      border-radius: 10px;
      padding: 20px;
      .maj-title {
        color: $light;
        text-align: justify;

        &:first-of-type {
          margin-bottom: auto;
        }
      }
    }
  }
}
</style>
