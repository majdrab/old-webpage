<template>
    <MajContainer class="home" centerX centerY>
        <MajContainer class="home__container" >
            <MajDrabLogo class="home__container-logo" />
            <MajContainer vertical class="home__container-description">
                <MajTitle is="h4">I'm a junior front-end web developer and designer. Welcome to my portfolio website!</MajTitle>
                <MajTitle is="h4">The website is still a work in progress. I hope you'll still enjoy it!</MajTitle>
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
  padding: 50px 0 30px;
  flex-grow: 1;
  &__container {
    max-width: 700px;
    gap: 20px;
    &-logo {
      flex: 1 1 0px;
    }
    &-description {
      flex: 1 1 0px;
      background: $lavender;
      // border: 4px solid $primary;
      border-radius: 10px;
      padding: 20px;
      opacity: 0;
      animation: home-appear 1s ease forwards 3.8s;
      .maj-title {
        color: $primary;
        text-align: justify;
        hyphens: auto;

        &:first-of-type {
          margin-bottom: auto;
        }
      }
      @keyframes home-appear {
        to {
          opacity: 1;
        }
      }
    }
  }
}
</style>
