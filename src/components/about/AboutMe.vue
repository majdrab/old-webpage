<template>
    <MajContainer centerY class="about-me">
        <MajContainer centerX centerY class="about-me__side">
            <div class="about-me__image-wrapper">
                <img class="about-me__image" :src="getImage" alt="My pictures" @click="nextImage()">
            </div>
            
        </MajContainer>
        <MajContainer centerY vertical class="about-me__side">
            <MajTitle is="h4">
                About Me.
            </MajTitle>
            <MajParagraph>
                I'm Maj Drab, a 28-year-old Slovenian <span>junior Front-end developer</span>. Currently in the process of gaining more programming knowledge and doing all kinds of projects.
            </MajParagraph>
            <MajParagraph>
                I like to <span>resolve</span> design problems, <span>create</span> smart user interface and <span>imagine</span> useful interaction, developing <span>rich web experiences</span> & <span>web applications</span>.
                
            </MajParagraph>
            <MajParagraph>
                When not working or futzing around with code, I like to play D&D, video and board games, or go for a walk in the woods.
            </MajParagraph>
            <MajParagraph>
                I'm actively <span>looking for a job</span> <MajIcon icon="arrow-right" /> 
                <a 
                    class="about-me__cv"
                    target="_blank"
                    href="../../../public/DrabMajCV.pdf"
                >Check out my CV
                </a>
            </MajParagraph>
        </MajContainer>
    </MajContainer>
</template>

<script>
export default {
  name: "AboutMe",
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
.about-me {
  width: 100vw;
  padding: 70px 40px 30px;
  gap: 20px;
  &__side {
    flex: 1 1 0px;
    gap: 20px;
    max-width: 500px;
    .about-me__image-wrapper {
      max-width: 405px;
      background-color: $primary;
      aspect-ratio: 1/1;
      padding: 5px;
      border-radius: 50%;
    }
    .about-me__image {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      object-position: 50% 50%;
      border-radius: 50%;
      cursor: pointer;
    }
    .maj-paragraph {
      color: $darkEr;
      text-align: justify;
      hyphens: auto;

      span {
        color: $secondary;
        font-weight: 500;
      }
      .about-me__cv {
        background: $secondary;
        color: $light;
        padding: 7px;
        margin-left: 7px;
        border: 1px solid $secondary;
        border-radius: 4px;
        transition: all 0.3s;

        &:hover {
          background: $light;
          color: $darkEr;
          cursor: pointer;
        }
      }
    }
  }
  @media screen and ($mediaL) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 60px;
  }
}
</style>
