<template>
    <MajContainer vertical class="about">
        <AboutMe />
        <FamiliarTech />
        <UdemyCertificates />
    </MajContainer>
</template>

<script>
import AboutMe from "../components/about/AboutMe.vue";
import FamiliarTech from "../components/about/FamiliarTech.vue";
import UdemyCertificates from "../components/about/UdemyCertificates.vue";

export default {
  name: "AboutView",
  components: { AboutMe, FamiliarTech, UdemyCertificates }
}
</script>

<style lang="scss">
.about {
  width: 100vw;
  // padding: 50px 30px 30px;
  flex-grow: 1;
  // padding: 30px;
  // gap: 40px;
  position: relative;
}
</style>
