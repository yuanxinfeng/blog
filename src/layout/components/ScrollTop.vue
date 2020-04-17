<!--
 * @Description: 
 * @Author: Jasper
 * @Github: https://github.com/yuanxinfeng
 * @Date: 2019-05-20 13:50:49
 * @LastEditors: Jasper
 * @LastEditTime: 2020-04-17 14:09:12
 -->
<template>
  <div class="c-back-top" v-if="topBtn" @click="c_ScrollTop">返回顶部</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ScrollTop",
  data() {
    return {
      topBtn: false
    };
  },
  computed: {
    ...mapGetters(["isPager"])
  },
  watch: {
    isPager: function() {
      this.c_ScrollTop();
    }
  },
  mounted() {
    document
      .getElementsByClassName("main-container")[0]
      .addEventListener("scroll", this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      this.topBtn = false;
      let top =
        document.getElementsByClassName("main-container")[0].scrollTop ||
        document.documentElement.scrollTop;
      if (top > 200) {
        this.topBtn = true;
      } else {
        this.topBtn = false;
      }
    },
    c_ScrollTop() {
      let timer = null;
      timer = setInterval(function() {
        let osTop =
          document.getElementsByClassName("main-container")[0].scrollTop ||
          document.documentElement.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.getElementsByClassName(
          "main-container"
        )[0].scrollTop = document.documentElement.scrollTop = osTop + ispeed;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    }
  },
  beforeDestroy() {
    document
      .getElementsByClassName("main-container")[0]
      .removeEventListener("scroll", this.scrollHandler);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c-back-top {
  position: fixed;
  bottom: 15px;
  left: auto;
  right: 30px;
  padding: 10px;
  border: 1px solid #ddd;
  color: #999;
  text-decoration: none;
  width: 2.5em;
  font-size: 13px;
  border-radius: 15px 0 0 15px;
  cursor: pointer;
}
@media screen and (max-width: 640px) {
  .c-back-top {
    left: auto;
    right: 10px;
    border-radius: 2px !important;
  }
}

@media screen and (max-width: 480px) {
  .c-back-top {
    left: auto;
    right: -2px;
    border-radius: 2px !important;
  }
}
</style>
