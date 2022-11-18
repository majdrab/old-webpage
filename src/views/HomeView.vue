<template>
    <MajContainer class="home" centerX centerY>
        <MajContainer class="home__container" >
            <MajDrabLogo class="home__container-logo" />
            <MajContainer vertical class="home__container-description">
                <div>I'm a junior front-end web developer and designer. Welcome to my portfolio website!</div>
                <div>The website is still a work in progress.</div>
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
  width: calc(100vw - 200px);
  height: 100vh;
  &__container {
    max-width: 700px;
    &-logo {
      min-width: 200px;
      flex: 1 1 0px;
    }
    &-description {
      margin-left: 20px;
      flex: 1 1 0px;
      background: $blue;
      border-radius: 10px;
      padding: 20px;
      div {
        // text-align: center;
        font-weight: 500;
        font-size: 1.62rem;
        text-align: justify;
        color: $bg;
        &:first-of-type {
          margin-bottom: auto;
        }
      }
    }
  }
}
</style>
