<template>
  <div class="layout">
    <header-bar></header-bar>
    <div class="content">
      <app-main></app-main>
      <right-bar></right-bar>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import { HeaderBar, AppMain, RightBar, FooterBar } from "./components";
export default {
  components: {
    HeaderBar,
    AppMain,
    RightBar,
    FooterBar
  }
};
</script>
<style lang="scss" scoped>
.layout {
  position: relative;
  .content {
    padding: 10px;
    overflow: hidden;
    margin-top: 80px;
  }
}
</style>
