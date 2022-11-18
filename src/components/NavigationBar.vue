<template>
    <nav class="navigation">
        <div class="navigation__top">
            <router-link
                v-for="(link, index) in $options.links"
                :key="`link-${index}`"
                :title="link.title"
                :to="link.route" 
            >
                <MajIcon :icon="link.icon" :type="iconStyle(link.route)"/>
                <span>{{ link.title }}</span> 
            </router-link>
        </div>
        <div class="navigation__bottom">
            <a 
                href="https://github.com/majdrab/majdrab.github.io"
                title="Github Repo"
                target="_blank"
            >
                <MajIcon :icon="['fab', 'github']"/>
                <span>GitHub Repo</span>
            </a>
        </div>
    </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  links: [
    {
      route: "/",
      title: "Home",
      icon: "house"
    },
    {
      route: "/about",
      title: "About",
      icon: "user"
    },
    {
      route: "/projects",
      title: "Projects",
      icon: "star-sharp"
    }
  ],
  data () {
    return {
      currentLinkRoute: "/"
    }
  }, 
  methods: {
    iconStyle (path) {
      let style = "far"
      if (this.$route.path === path) {
        style = "fas"
      }
      
      return style
    }
  }
}
</script>

<style lang="scss">
.navigation {
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
  min-width: 200px;
  max-width: 200px;
  background: $bgDark;
  
  .navigation__top,
  .navigation__bottom {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    a,
    button {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      padding: 16px 25px;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.2;
      width: 100%;
      border-radius: 0;
      border: none;
      outline: none;
      background: transparent;
      transition: background-color 0.1s, transform 0.1s;
      border-left: solid 0px transparent;
      position: relative;
      svg {
        font-size: 16px;
        width: 18px;
        transition: color 0.1s;
        color: rgba($textLightIsh, 0.8);
      }
      span {
        color: $textLightIsh;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        margin-left: 12px;
        transition: all 0.1s;
      }
      &:hover {
        transition: all 0.1s;
        cursor: pointer;
        background: rgba(#3b3b3f, 0.6);
        svg {
          color: rgba(white, 0.75);
          transition: all 0.1s;
        }
        span {
          color: white;
          transition: all 0.1s;
        }
      }
      &:active {
        transition: all 0.1s;
        background: rgba(#3b3b3f, 0.8);
      }
      &.router-link-active,
      &.router-link-exact-active {
        background: rgba(#3b3b3f, 0.6);
        svg {
          color: lighten($blue, 2%);
          animation: navigation-active-icon 0.2s;
          @keyframes navigation-active-icon {
            from {
              opacity: 0.5;
              transform: scale(0.6);
            }
          }
        }
        span {
          color: white;
        }
      }
      & + a,
      & + button {
        margin-top: 1px;
      }
    }
  }
  .navigation__top {
    padding: 48.8px 0;
    flex-grow: 1;
  }
}
</style>