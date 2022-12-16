<template>
    <MajContainer centerY class="menu-dropdown">
        <transition name="fade">
            <div v-if="menuOpened" class="menu-dropdown__base">
                <router-link 
                    v-for="(link, index) in $options.dropdownLinks"
                    :key="index"
                    class="menu-dropdown__link"
                    :title="link.title"
                    :to="link.to"
                    @click="$emit('close')"
                >
                    <span>{{ link.title }}</span>
                </router-link>
            </div>
        </transition>
        <MajOverlay :visible="menuOpened" @close="$emit('close')" />
    </MajContainer>
</template>

<script>
export default {
  name: "MenuDropdown",
  dropdownLinks: [
    {
      title: "HOME",
      to: "/"
    },
    {
      title: "ABOUT",
      to: "/about"
    },
    {
      title: "PROJECTS",
      to: "/projects"
    },
    {
      title: "DND",
      to: "/dnd"
    }
  ],
  props: {
    menuOpened: { type: Boolean, default: false },
  }
}
</script>

<style lang="scss">
.menu-dropdown {
  position: fixed;
  top: 10px;
  left: 0;
  width: 100vw;
  z-index: 11;
  &__base {
    background: $secondary;
    padding: 90px 0 10px;
    border-radius: 5px;
    z-index: inherit;

    .menu-dropdown__link {
      span {
        color: $primary;
        margin-left: 0;
        }
      &.router-link-active,
      &.router-link-exact-active {
        span {
          color: $light;
        }
      }
    }
  }
}
</style>
