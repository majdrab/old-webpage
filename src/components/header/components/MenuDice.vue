<template>
    <div class="menu-dice">
        
        <MajContainer centerX centerY class="menu-dice__base">
            <MenuDiceSvg />
            <MajIcon class="menu-dice__base-icon" :icon="['fas', 'bars']" />
        </MajContainer>
    </div>
</template>

<script>
import MenuDiceSvg from "./MenuDiceSvg.vue";

export default {
  name: "MenuDice",
  components: { MenuDiceSvg }
}
</script>


<style lang="scss">
.menu-dice {
  min-width: 80px;
  height: 80px;
  position: relative;
  z-index: 2;

  &__base {
    min-width: 80px;
    height: 80px;
    position: fixed;
    top: -20px;
    transition: all 0.3s;
    &-icon {
      color: $primary;
      font-size: 1.3rem;
      transition: transform 0.3s;
      z-index: 2;
    }

    &:hover {
      transform: translateY(30px) scale(1.2) rotate(60deg);
      .menu-dice-svg__primary,
      .menu-dice-svg__secondary {
        opacity: 1;
      }
      .menu-dice__base-icon {
        transform: rotate(-60deg);
      }
    }
  }
}
</style>
