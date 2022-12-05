<template>
    <MajContainer class="familiar-tech">
        <MajIcon 
            v-for="(icon, index) in $options.icons"
            :key="index"
            :class="['familiar-tech__icon', `familiar-tech__icon-${icon}`]"
            :icon="['fab', icon]"
        />
    </MajContainer>
</template>

<script>
export default {
  name: "FamiliarTech",
  icons: [ "vuejs", "github", "sass", "square-js", "css3-alt", "html5" ]
}
</script>

<style lang="scss">
.familiar-tech {
  margin: 70px auto;
  gap: 30px;
  .familiar-tech__icon {
    color: $lPrimary;
    font-size: 4rem;
    transition: color 0.2s;
    @each $name, $color in $techIcons {
      &#{"-" + $name}:hover {
        color: $color;
      }
    }
  }
}
</style>
