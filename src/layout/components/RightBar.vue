<template>
  <div class="rigth-bar">
    <div class="right-header"></div>
  </div>
</template>
<style lang="scss" scoped>
.rigth-bar {
  float: right;
  background: rgb(202, 188, 161);
  width: 33.33333%;
  padding: 10px;
  .right-header {
    width: 100%;
    height: 200px;
    padding-bottom: 20px;
    margin-top: 64px;
    background-color: rgb(230, 231, 223);
  }
  /* 小于479px */
  @media only screen and (max-width: 767px) {
    & {
      display: none;
    }
  }
}
</style>
