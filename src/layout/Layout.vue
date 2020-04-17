<!--
 * @Description: 
 * @Author: Jasper
 * @Github: https://github.com/yuanxinfeng
 * @Date: 2019-05-15 09:27:43
 * @LastEditors: Jasper
 * @LastEditTime: 2020-04-17 14:02:27
 -->
<template>
  <div class="layout">
    <header-bar></header-bar>
    <div class="main-container">
      <app-main></app-main>
      <right-bar v-if="isRightBar"></right-bar>
    </div>
    <footer-bar></footer-bar>
    <scrollTop></scrollTop>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import {
  HeaderBar,
  AppMain,
  RightBar,
  FooterBar,
  ScrollTop
} from "./components";
export default {
  components: {
    HeaderBar,
    AppMain,
    RightBar,
    FooterBar,
    ScrollTop
  },
  computed: {
    ...mapGetters(["isRightBar"])
  }
};
</script>
<style lang="scss" scoped>
.layout {
  height: 100%;
  position: relative;
  .main-container {
    overflow: auto;
    height: calc(100vh - 80px - 64px);
  }
}
@media screen and (max-width: 960px) {
  .main-container {
    height: calc(100vh - 100px - 54px) !important;
  }
}
</style>
