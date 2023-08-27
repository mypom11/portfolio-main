<template>
  <header>
    <h1>Min's Portfolio</h1>
    <ul>
      <li>About Me</li>
      <li>Career</li>
      <li>Projects</li>
      <li>Contacts</li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/_variables.scss";

header {
  @include flex;
  padding: 1% 10%;
  border-bottom: 1px solid $black;
  position: fixed;
  width: 100%;
  h1 {
    font-size: rem(30);
    font-weight: 900;
  }
}

ul {
  @include flex(flex-start);
  gap: 20px;
  > li {
    font-size: rem(20);
    font-weight: 600;
    cursor: pointer;
  }
}
</style>
