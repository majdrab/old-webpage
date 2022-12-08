<template>
    <MajContainer vertical class="footer-content">
        <MajContainer centerY class="footer__section">
            <a
                v-for="(contact, index) in $options.contact_links"
                :key="`contact-${index}`"
                class="footer__contact"
                :title="contact.title"
                :href="contact.href" 
                target="_blank"
            >
                <MajIcon :icon="['fab', contact.icon]"/>
            </a>
        </MajContainer>
        <MajContainer centerY class="footer__section">
            <MajParagraph>
                Copyright © 2022 Maj Drab, All Rights Reserved
            </MajParagraph>
        </MajContainer>
        
    </MajContainer>
</template>

<script>
export default {
  name: "FooterContent",
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
.footer-content {
  display: none;
  // height: 100px;
  width: 100vw;
  // flex-direction: column;
  // z-index: 2;
  // margin-bottom: 10px;

  &__section {
    width: 100%;
    z-index: 2;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      padding: 0 25px;
      font-weight: 500;
      svg {
        font-size: 1rem;
        width: 18px;
        transition: color 0.1s;
        color: rgba($lightEr, 0.8);
      }
      span {
        color: $lightEr;
        max-width: 100%;
        margin-left: 12px;
        transition: all 0.1s;
      }
      &:hover {
        cursor: pointer;
        svg {
          color: rgba($light, 0.75);
        }
        span {
          color: $light;
        }
      }
      &.router-link-active,
      &.router-link-exact-active {
        svg {
          color: $secondary;
          animation: navigation-active-icon 0.2s;
          @keyframes navigation-active-icon {
            from {
              opacity: 0.5;
              transform: scale(0.6);
            }
          }
        }
        span {
          color: $light;
        }
      }
    }
  }
}
</style>