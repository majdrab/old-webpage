<template>
    <MajContainer centerY class="contact-links">
        <a
            v-for="(contact, index) in $options.contact_links"
            :key="`contact-${index}`"
            class="contact-links__contact"
            :title="contact.title"
            :href="contact.href" 
            target="_blank"
        >
            <MajIcon :icon="['fab', contact.icon]"/>
        </a>
    </MajContainer>
</template>

<script>
export default {
  name: "ContactLinks",
  contact_links: [
    {
      href: "https://www.facebook.com/maj.drab/",
      title: "Facebook",
      icon: "facebook"
    },
    {
      href: "https://www.linkedin.com/in/maj-drab-891a1041/",
      title: "LinkedIn",
      icon: "linkedin"
    },
    {
      href: "https://github.com/majdrab",
      title: "GitHub",
      icon: "github"
    }
  ]
}
</script>

<style lang="scss">
.contact-links {
  gap: 20px;
  z-index: 1;
  &__contact {
    color: $secondary;
    font-size: 2rem;
    transition: all 0.2s;
    
    &:hover {
      cursor: pointer;
      color: $light;
      scale: 1.05;
    }
  }
}
</style>