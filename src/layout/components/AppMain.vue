<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.app-main {
  max-height: 1000px;
  width: 66.66666%;
  float: left;
  padding: 10px;
  /* 小于767px */
  @media only screen and (max-width: 767px) {
    & {
      width: 100%;
    }
  }
}
</style>
