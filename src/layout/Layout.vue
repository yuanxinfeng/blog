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
  position: relative;
  .main-container {
    overflow: hidden;
    min-height: 200px;
    @media only screen and (min-width: 960px) {
      & {
        padding: 0 40px 0 40px !important;
      }
    }
  }
}
</style>
