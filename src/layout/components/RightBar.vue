<template>
  <div class="rigth-bar">
    <div class="about-me">
      <h2 class="about-title">关于我</h2>
      <div class="avatar">
        <img src="../../assets/img/zan.png">
      </div>
      <div class="ab_con">
        <p>网名：墨子有点冷</p>
        <p>职业：Web前端攻城狮</p>
        <p>个人微信：kiss729528226</p>
        <p>邮箱：729528226@qq.com</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.rigth-bar {
  float: right;
  width: 33.33333%;
  padding: 10px;
  margin-top: 70px;
  .about-me {
    .about-title {
      padding: 0 10px;
      line-height: 40px;
      height: 40px;
      font-size: 18px;
      border-bottom: 1px solid #e5e5e5;
      border-left: 5px solid #333;
      color: #333;
    }
    .avatar {
      width: 100px;
      height: 100px;
      overflow: hidden;
      border-radius: 50px;
      margin: 10px auto 0;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .ab_con {
      line-height: 30px;
      padding: 10px;
      p {
        background: #f6f6f6;
        margin: 5px 0;
        padding-left: 10px;
        border-radius: 5px;
        text-shadow: rgba(255, 255, 255, 0.3) 0px 1px 0px;
      }
    }
  }
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    & {
      display: none;
    }
  }
  @media only screen and (max-width: 479px) {
    & {
      display: none;
      margin-top: 65px;
    }
  }
}
</style>
