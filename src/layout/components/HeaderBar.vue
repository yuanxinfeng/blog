<template>
  <div class="app_header">
    <div class="app_head_wrapper">
      <div class="logo"></div>
      <div class="menu">
        <ul>
          <li>首页</li>
          <li>归档</li>
          <li>工具</li>
          <li>关于</li>
        </ul>
      </div>
      <div class="right">right</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
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
    div {
      width: 100px;
      float: left;
    }
    .logo {
      width: 100px;
      height: 64px;
      left: 10px;
      background-image: url("../../assets/logo.png");
      background-repeat: no-repeat;
      background-size: contain;
      margin-left: 35px;
    }
    .menu {
      width: calc(100vw - 300px);
      ul {
        width: 100%;
        height: 64px;
        margin: 0 0 0 -20px;
        text-align: center;
        font-size: 21px;
        li {
          display: inline;
          line-height: 60px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .right {
      float: right;
    }
  }
}
</style>
