<template>
  <!-- <app-header /> -->
  <AppArrow />
  <router-view />
</template>

<script>
import AppArrow from "./components/AppArrow.vue";

// import AppHeader from "./components/AppHeader.vue";

export default { components: { AppArrow } };
</script>

<style lang="scss">
@import "~@/assets/scss/common.scss";
</style>
