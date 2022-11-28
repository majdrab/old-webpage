<template>
    <nav class="navigation">
        <MajContainer centerY class="navigation__section">
            <router-link
                v-for="(link, index) in $options.links"
                :key="`link-${index}`"
                :title="link.title"
                :to="link.route" 
            >
                <MajIcon :icon="[iconStyle(link.route), link.icon]"/>
                <span>{{ link.title }}</span> 
            </router-link>
            <router-link
                title="DnD"
                to="/dnd" 
            >
                <MajIcon :icon="['fab', 'd-and-d']"/>
                <span>DnD</span> 
            </router-link>
        </MajContainer>
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
  height: 60px;
  width: 100vw;
  z-index: 2;
  margin-top: 10px;
  
  &__section {
    width: 100%;
    z-index: 2;
    a,
    button {
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
      &:nth-of-type(2) {
        margin-right: 80px;
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
  // .navigation__top {
  //   padding: 48.8px 0;
  //   flex-grow: 1;
  // }
}
</style>