<!--
 * @Description: 
 * @Author: Jasper
 * @Github: https://github.com/yuanxinfeng
 * @Date: 2019-05-15 10:26:56
 * @LastEditors: Jasper
 * @LastEditTime: 2020-04-17 14:16:50
 -->
<template>
  <div :class="['app-main', !isRightBar ? 'no-rightbar' : '']">
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isRightBar"])
  }
};
</script>

<style lang="scss" scoped>
.app-main {
  width: 66.66666%;
  float: left;
  height: 100%;
  padding: 10px;
  /* 小于767px */
  @media only screen and (max-width: 767px) {
    & {
      width: 100%;
    }
  }
}
.no-rightbar {
  width: 100%;
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
