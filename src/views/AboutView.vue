<template>
    <div class="about">
        <MajContainer class="about__section">
            <img class="about__section-img" :src="getImage" alt="My pictures" @click="nextImage()">
            <!-- <MajParagraph>
                I'm Maj Drab, a 28-year-old Slovenian junior Front-end developer. Currently in the process of gaining more programming knowledge and doing all kinds of projects.
            </MajParagraph> -->
            <MajParagraph>
                {{ getImage }}
            </MajParagraph>
        </MajContainer>
    </div>
</template>

<script>
export default {
  name: "AboutView",
  image_links: [
    "./images/me-1.jpg",
    "./images/me-2.jpg",
    "./images/me-3.jpg"
  ],
  data () {
    return {
      picIndex: 0
    }
  },
  computed: {
    getImage () {
      return this.$options.image_links[this.picIndex]
    }
  },
  // created () {
  //   this.nextImage()
  // },
  methods: {
    nextImage () {
      if (this.picIndex < this.$options.image_links.length - 1) {
        this.picIndex += 1
      } else {
        this.picIndex = 0
      }
    }
  }
}
</script>

<style lang="scss">
.about {
  width: calc(100vw - 200px);
  height: 100vh;
  
  &__section {
    max-width: 1000px;
    display: flex;
    & > * {
      flex: 1 1 0px;
    }

    &-img {
      width: 300px;
      // max-width: ;
    }
  }
}

</style>
