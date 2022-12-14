<template>
    <MajContainer class="home" centerX centerY>
        <MajContainer vertical class="home__container" >
            <MajTitle is="h1">Maj Drab</MajTitle>
            <MajContainer vertical class="home__desc">
                <MajParagraph size="1.6">I'm a junior front-end web developer and designer. Welcome to my portfolio website!<br><br>The website is still a work in progress. I hope you'll still enjoy it!</MajParagraph>
            </MajContainer>
        </MajContainer>
    </MajContainer>
</template>

<script>

export default {
  name: "HomeView",
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
  padding: 60px 0 25px;
  flex-grow: 1;
  &__container {
    max-width: 600px;
    gap: 20px;
  }
  .maj-title {
    color: $secondary;
    padding-bottom: 5px;
    border-bottom: 3px solid $secondary;
  }
  &__desc {
    .maj-paragraph {
      color: $primary;
      text-align: justify;
      hyphens: auto;
    }
  }
}
</style>
