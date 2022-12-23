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
}
</script>

<style lang="scss">
.home {
  width: 100vw;
  padding: 70px 20px 35px;
  flex-grow: 1;
  &__container {
    width: 600px;
    gap: 20px;
  }
  .maj-title {
    color: $secondary;
    padding-bottom: 5px;
    border-bottom: 3px solid $secondary;
    // @media screen and ($mediaXS) {
    //   font-size: 3rem;
    //   line-height: 3.6rem;
    //   font-weight: 500;
    // }
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
