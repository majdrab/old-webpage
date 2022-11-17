<template>
    <MajContainer class="home" centerX centerY>
        <MajDrabLogo />
        <MajContainer vertical class="home__description">
            <div>I'm a junior front-end web developer and designer. Welcome to my portfolio website!</div>
            <div>The website is still a work in progress.</div>
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
  width: 100%;
  flex-wrap: wrap;
  &__description {
    max-width: 300px;
    max-height: 239px;
    height: 100%;
    div {
      // text-align: center;
      font-weight: 500;
      font-size: 1.8rem;
      // text-align: justify;
      color: $textDark;
      &:first-of-type {
        margin-bottom: auto;
      }
    }
  }
}
</style>
