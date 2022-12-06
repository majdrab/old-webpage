<template>
    <MajContainer centerY class="udemy-certificates">
        <MajContainer vertical class="udemy-certificates__container">
            <MajTitle is="h4" class="udemy-certificates__title">
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
  padding: 30px 40px 50px;
  background: $lavender;
  &__container {
    max-width: 1000px;
    gap: 20px;
  }
  &__title {
    color: $dark;
    padding-bottom: 7px;
    border-bottom: 2px solid $lPrimary;
  }
  &__display {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    // flex-wrap: wrap;
    gap: 20px;
    // align-content: flex-start;
    
  }
  &__certificate {
    max-width: 450px;
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
