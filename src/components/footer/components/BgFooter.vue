<template>
    <div class="footer-bg"></div>
</template>

<script>
export default {
  name: "BgFooter"
}
</script>


<style lang="scss" scoped>
.footer-bg {
background: no-repeat url('./images/bg/header-bg.svg');
transform: rotate(180deg) scaleY(0.5);
background-size: 1920px 300px;
// position: absolute;
bottom: 0px;
left: 0px;
height: 200px;
width: 100vw;
z-index: 1;
}
</style>
