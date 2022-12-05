<template>
    <MajContainer class="about-me">
        <MajContainer class="about-me__side">
            <img class="about-me__image" :src="getImage" alt="My pictures" @click="nextImage()">
        </MajContainer>
        <MajContainer vertical class="about-me__side">
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
  background: $lavender;
  gap: 20px;
  &__side {
    flex: 1 1 0px;
    gap: 20px;
    .about-me__image {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      object-position: 50% 50%;
      border-radius: 50%;
    }
    .maj-paragraph {
      color: $darkEr;
      text-align: justify;
      // text-justify: distribute;
      // text-align-last: left;
      // word-break: break-all;
      // overflow-wrap: break-word;
      hyphens: auto;
    }
    .maj-icon {
      color: $darkIsh;
      font-size: 4rem;
    }
  }
}
</style>
