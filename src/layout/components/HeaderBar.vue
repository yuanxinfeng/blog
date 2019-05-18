<template>
  <div :class="['app_header', isOpen ? 'isM' : '']">
    <div class="app_head_wrapper">
      <div class="logo"></div>
      <div class="mnav">
        <div :class="['nav_btn', isOpen ? 'open' : '']" @click="changeNav">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <ul style="display:block" v-if="isOpen">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/blogs/about">关于我</router-link>
          </li>
          <li>
            <router-link to="/blogs">杂文</router-link>
          </li>
          <li>
            <router-link to="/blogs/tools">工具栏</router-link>
          </li>
          <li>
            <router-link to="/blogs">留言</router-link>
          </li>
          <li>
            <router-link to="/blogs/search">search</router-link>
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
              <router-link to="/blogs/about">关于我</router-link>
            </li>
            <li>
              <router-link to="/blogs">杂文</router-link>
            </li>
            <li>
              <router-link to="/blogs/tools">工具栏</router-link>
            </li>
            <li>
              <router-link to="/blogs">留言</router-link>
            </li>
            <li>
              <router-link to="/blogs/search">search</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    changeNav() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
<style lang="scss" scoped>
.isM {
  background: rgba(1, 1, 1, 0.8) !important;
  border-bottom: 1px solid rgba(1, 1, 1, 0.8) !important;
}
.app_header {
  position: fixed;
  width: 100%;
  line-height: 64px;
  height: 64px;
  z-index: 2;
  top: 0;
  background: #fff;
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
          background-color: rgb(19, 72, 151);
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
        background: rgba(1, 1, 1, 0.8);
        width: 100%;
        padding-bottom: 40px;
      }
      & li {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        display: block;
        overflow: hidden;
        text-align: center;
        a {
          color: #fff;
        }
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
      color: #999;
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
            color: rgb(123, 170, 201);
          }
        }
      }
    }

    /* 小于960px */
    @media only screen and (max-width: 960px) {
      .mnav {
        display: block;
        width: 100%;
        z-index: 99999;
      }
      .topnav {
        display: none;
      }
    }
  }
}
</style>
