<template>
    <div class="menu-dice">
        <MajContainer 
            centerX 
            centerY 
            :class="['menu-dice__container', {'menu-dice__container--active' : menuOpened}]"
            @click="menuOpened = !menuOpened"
        >
            <MenuDiceSvg />
            <MajIcon class="menu-dice__container-icon" :icon="['fas', 'bars']" />
        </MajContainer>
        <MenuDropdown 
            :menuOpened="menuOpened"
            @close="menuOpened = false"
        />
    </div>
</template>

<script>
import MenuDiceSvg from "./MenuDiceSvg.vue";
import MenuDropdown from "./MenuDropdown.vue";

export default {
  name: "MenuDice",
  components: { MenuDiceSvg, MenuDropdown },
  data () {
    return {
      menuOpened: false
    }
  }
}
</script>


<style lang="scss">
.menu-dice {
  min-width: 80px;
  height: 80px;
  position: relative;
  z-index: 12;

  &__container {
    min-width: 80px;
    height: 80px;
    position: fixed;
    top: -20px;
    cursor: pointer;
    transition: all 0.3s;
    z-index: 12;

    &-icon {
      color: $primary;
      font-size: 1.3rem;
      transition: transform 0.3s;
      z-index: 12;
    }
  }
  .menu-dice__container--active,
  .menu-dice__container:hover {
    transform: translateY(30px) scale(1.2) rotate(60deg);
    .menu-dice-svg__primary,
    .menu-dice-svg__secondary {
      opacity: 1;
    }
    .menu-dice__container-icon {
      transform: rotate(-60deg);
    }
  }
}
</style>
