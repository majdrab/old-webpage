<template>
    <MajContainer vertical class="udemy-certificates">
        <MajTitle is="h4">
            My Udemy Certificates
        </MajTitle>
        <MajContainer class="udemy-certificates__container">
            <div 
                v-for="(certificate, index) in $options.certificate_links"
                :key="index"
                class="udemy-certificates__certificate"
            >
                <img
                    :src="certificate"
                    alt="certificate"
                    title="Certificate"
                />
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
  padding: 30px 40px;
  gap: 20px;
  background: $lPrimary;
  &__container {
    flex-wrap: wrap;
    gap: 20px;
    align-content: flex-start;
    
  }
  &__certificate {
    max-width: 450px;
    aspect-ratio: 1600/1190;
    overflow: hidden;
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
