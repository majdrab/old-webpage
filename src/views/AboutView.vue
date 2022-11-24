<template>
    <MajContainer vertical class="about">
        <div class="about__header-bg"></div>
        <MajContainer class="about__section">
            <MajContainer class="about__section-sub">
                <img class="about__my-img" :src="getImage" alt="My pictures" @click="nextImage()">
            </MajContainer>
            <MajContainer vertical class="about__section-sub">
                <MajTitle is="h4">
                    About Me.
                </MajTitle>
                <MajParagraph>
                    I'm Maj Drab, a 28-year-old Slovenian junior Front-end developer. Currently in the process of gaining more programming knowledge and doing all kinds of projects.
                </MajParagraph>
                <MajParagraph>
                    I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                    When not working or futzing around with code, I like to play D&D, video/board games, or go for a walk in the woods.
                </MajParagraph>
                <MajParagraph>
                    I'm actively looking for a job.
                </MajParagraph>
            </MajContainer>
        </MajContainer>
        <MajContainer class="about__section">
            <MajContainer vertical class="about__section-sub">
                <MajTitle is="h4">
                    Familiar with:
                </MajTitle>
                <MajContainer>
                    <MajIcon :icon="['fab', 'vuejs']"/>
                </MajContainer>
                
            </MajContainer>
            <MajContainer vertical class="about__section-sub">
                <MajTitle is="h4">
                    Getting to know:
                </MajTitle>
                <MajContainer>
                    <MajIcon :icon="['fab', 'react']"/>
                </MajContainer>
            </MajContainer>
        </MajContainer>
        <MajContainer vertical class="about__section">
            <MajTitle is="h4">
                My Udemy Certificates
            </MajTitle>
            <MajContainer class="about__certificates">
                <div 
                    v-for="(certificate, index) in $options.certificate_links"
                    :key="index"
                    class="about__certificates-wrapper"
                >
                    <img
                        :src="$options.certificate_links[index]"
                        alt="certificate"
                    />
                </div>
            </MajContainer>
        </MajContainer>
    </MajContainer>
</template>

<script>
export default {
  name: "AboutView",
  image_links: [
    "./images/me-1.jpg",
    "./images/me-2.jpg",
    "./images/me-3.jpg"
  ],
  icons: [
    "vuejs",
    "./images/certificates/web-design-for-beginners.jpg"
  ],
  certificate_links: [
    "./images/certificates/git-github.jpg",
    "./images/certificates/web-design-for-beginners.jpg"
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
.about {
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 30px;
  gap: 40px;
  &__section {
    max-width: 1000px;
    width: 100%;
    max-height: 50vh;
    margin: 0 auto;
    gap: 20px;
    &-sub {
      flex: 1 1 0px;
      gap: 20px;
      .about__my-img {
        width: 100%;
        aspect-ratio: 1/1;
        // aspect-ratio: 500/375;
        object-fit: cover;
        object-position: 50% 50%;
        border-radius: 50%;
      }
      .maj-paragraph {
        color: $textDarkIsh;
        text-align: justify;
      }
      .maj-icon {
        color: $textDarkIsh;
        font-size: 4rem;
      }
    }
    .maj-title {
      color: $textDark;
    }
    .about__certificates {
      flex-wrap: wrap;
      gap: 20px;
      align-content: flex-start;

      &-wrapper {
        max-width: 450px;
        // width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
