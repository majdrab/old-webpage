<template>
    <div class="menu-dice">
        <MajContainer centerX centerY class="menu-dice__base">
            <MajIcon class="menu-dice__base-icon" :icon="['fas', 'bars']" />
        </MajContainer>
    </div>
</template>

<script>
export default {
  name: "MenuDice"
}
</script>


<style lang="scss" scoped>
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
    background: no-repeat url('./images/bg/d20.svg');
    background-size: 80px 80px;
    opacity: 0.7;
    transition: all 0.3s;
    &-icon {
      color: $primary;
      font-size: 1.3rem;
    }

    &:hover {
      opacity: 1;
      transform: translateY(30px) scale(1.2);
    }
  }
}
</style>
