<template>
    <MajContainer centerY class="udemy-certificates">
        <MajContainer vertical class="udemy-certificates__container">
            <MajTitle is="h3" class="udemy-certificates__title">
                My Udemy Certificates
            </MajTitle>
            <div class="udemy-certificates__display">
                <button 
                    v-for="(certificate, index) in $options.certificate_links"
                    :key="index"
                    class="udemy-certificates__certificate"
                >
                    <img
                        :src="certificate"
                        alt="certificate"
                        title="Certificate"
                    />
                </button>
            </div>
        </MajContainer>
    </MajContainer>
</template>

<script>
export default {
  name: "UdemyCertificates",
  certificate_links: [
    "./images/certificates/git-github.jpg",
    "./images/certificates/web-design-for-beginners.jpg"
  ]
}
</script>

<style lang="scss">
.udemy-certificates {
  width: 100vw;
  padding: 30px 0 100px;
  // background: $lavender;
  &__container {
    max-width: 1000px;
    gap: 20px;
    @media screen and ($mediaL) {
      max-width: 500px;
    }
  }
  &__title {
    color: $primary;
    padding-bottom: 7px;
    border-bottom: 2px solid $primary;
  }
  &__display {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media screen and ($mediaL) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &__certificate {
    // max-width: 450px;
    aspect-ratio: 1600/1190;
    overflow: hidden;
    // box-shadow: $boxShadow;
    cursor: pointer;
    img {
      width: 100%;
      transition: scale 0.3s;
    }
    &:hover {
      img {
        scale: 1.03;
      }
    }
  }
}
  

</style>
