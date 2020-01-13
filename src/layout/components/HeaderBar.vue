<template>
  <div :class="['app_header', isMobileOpenNav ? 'isM' : '']">
    <div class="app_head_wrapper">
      <div class="logo"></div>
      <div class="mnav">
        <div
          :class="['nav_btn', isMobileOpenNav ? 'open' : '']"
          @click="changeNav"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <ul style="display:block" v-if="isMobileOpenNav">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/tools">工具栏</router-link>
          </li>
        </ul>
      </div>
      <div class="topnav">
        <nav>
          <ul>
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/tools">工具栏</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    ...mapGetters(["isMobileOpenNav"])
  },
  methods: {
    changeNav() {
      this.$store.dispatch("getMobileOpenNav", !this.isMobileOpenNav);
    }
  }
};
</script>
<style lang="scss" scoped>
$nav_backgroundcolor: #fff;
$nav_fontcolor: rgb(51, 63, 71);
$nav_hoverfontcolor: rgb(47, 177, 216);
.isM {
  border-bottom: 1px solid #fff !important;
}
.app_header {
  position: fixed;
  width: 100%;
  line-height: 64px;
  height: 64px;
  z-index: 2;
  top: 0;
  background: $nav_backgroundcolor;
  border-bottom: 1px solid #ebebeb;
  .app_head_wrapper {
    position: relative;
    .logo {
      display: block;
      float: left;
      width: 100px;
      height: 64px;
      left: 10px;
      background-image: url("../../assets/img/logo.png");
      background-repeat: no-repeat;
      background-size: contain;
      margin-left: 35px;
    }
    .mnav {
      display: none;
      width: 80%;
      .nav_btn {
        height: 64px;
        width: 64px;
        padding: 5px;
        position: relative;
        float: right;
        border: 5px solid transparent;
        -moz-border-radius: 100%;
        -webkit-border-radius: 100%;
        border-radius: 100%;
        -moz-transition: 0.3s;
        -o-transition: 0.3s;
        -webkit-transition: 0.3s;
        transition: 0.3s;
        cursor: pointer;
        .bar {
          height: 5px;
          width: 50px;
          display: block;
          margin: 10px auto;
          position: relative;
          background-color: rgb(47, 177, 216);
          -moz-border-radius: 10px;
          -webkit-border-radius: 10px;
          border-radius: 10px;
          -moz-transition: 0.4s;
          -o-transition: 0.4s;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }
      }
      .open {
        .bar:nth-of-type(1) {
          -moz-transform: translateY(15px) rotate(45deg);
          -ms-transform: translateY(15px) rotate(45deg);
          -webkit-transform: translateY(15px) rotate(45deg);
          transform: translateY(15px) rotate(45deg);
        }
        .bar:nth-of-type(2) {
          opacity: 0;
        }
        .bar:nth-of-type(3) {
          -moz-transform: translateY(-15px) rotate(-45deg);
          -ms-transform: translateY(-15px) rotate(-45deg);
          -webkit-transform: translateY(-15px) rotate(-45deg);
          transform: translateY(-15px) rotate(-45deg);
        }
      }
      ul {
        clear: both;
        display: none;
        background: $nav_backgroundcolor;
        width: 100%;
        padding-bottom: 10px;
      }
      & li {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        display: block;
        overflow: hidden;
        text-align: center;
      }
    }
    /* nav */
    .topnav {
      width: 80%;
      overflow: hidden;
    }
    /*导航颜色*/
    nav {
      width: 1100px;
      margin: auto;
      line-height: 37px;
      float: left;
      ul {
        text-align: center;
        height: 64px;
        line-height: 64px;
        li {
          display: inline;
          font-size: 16px;
          padding: 0px 20px;
          cursor: pointer;
          a {
            color: $nav_fontcolor;
            &:hover {
              color: $nav_hoverfontcolor;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 960px) {
    & {
      line-height: 54px !important;
      height: 54px !important;
      .app_head_wrapper {
        .logo {
          height: 54px;
        }
        .mnav {
          display: block;
          width: 100%;
          z-index: 99999;
          .nav_btn {
            height: 54px;
            width: 54px;
            .bar {
              height: 2px;
              width: 35px;
              margin: 7px auto;
            }
          }
          .open {
            .bar:nth-of-type(1) {
              -moz-transform: translateY(9px) rotate(45deg);
              -ms-transform: translateY(9px) rotate(45deg);
              -webkit-transform: translateY(9px) rotate(45deg);
              transform: translateY(9px) rotate(45deg);
            }
            .bar:nth-of-type(2) {
              opacity: 0;
            }
            .bar:nth-of-type(3) {
              -moz-transform: translateY(-9px) rotate(-45deg);
              -ms-transform: translateY(-9px) rotate(-45deg);
              -webkit-transform: translateY(-9px) rotate(-45deg);
              transform: translateY(-9px) rotate(-45deg);
            }
          }
          a {
            color: $nav_fontcolor;
            &:hover {
              color: $nav_hoverfontcolor;
            }
          }
        }
        .topnav {
          display: none;
        }
      }
    }
  }
}
</style>
