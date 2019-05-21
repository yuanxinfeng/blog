<template>
  <!-- <div class="loading" v-show="showLoading">
    <div class="ajax-loading load-status">
      <div class="head-space"></div>
      <div class="loading-box">
        <div class="la-square-jelly-box">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>-->
  <div class="loading" v-show="showLoading">
    <div class="loader">
      <span class="dot dot_1"></span>
      <span class="dot dot_2"></span>
      <span class="dot dot_3"></span>
      <span class="dot dot_4"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    showLoading: false
  }
};
</script>
<style lang="scss">
.loading {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
}
.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -22px;
  margin-top: 4px;
  width: 44px;
  height: 8px;
  margin: 12px auto;
}
.dot {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
  margin-top: -25px;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #ccc;
  position: absolute;
}
.dot_1 {
  animation: animateDot1 1.5s linear infinite;
  left: 12px;
  background: #e579b8;
}
.dot_2 {
  animation: animateDot2 1.5s linear infinite;
  animation-delay: 0.5s;
  left: 24px;
}
.dot_3 {
  animation: animateDot3 1.5s linear infinite;
  left: 12px;
}
.dot_4 {
  animation: animateDot4 1.5s linear infinite;
  animation-delay: 0.5s;
  left: 24px;
}
@keyframes animateDot1 {
  0% {
    transform: rotate(0) translateX(-12px);
  }
  25% {
    transform: rotate(180deg) translateX(-12px);
  }
  75% {
    transform: rotate(180deg) translateX(-12px);
  }
  100% {
    transform: rotate(360deg) translateX(-12px);
  }
}
@keyframes animateDot2 {
  0% {
    transform: rotate(0) translateX(-12px);
  }
  25% {
    transform: rotate(-180deg) translateX(-12px);
  }
  75% {
    transform: rotate(-180deg) translateX(-12px);
  }
  100% {
    transform: rotate(-360deg) translateX(-12px);
  }
}
@keyframes animateDot3 {
  0% {
    transform: rotate(0) translateX(12px);
  }
  25% {
    transform: rotate(180deg) translateX(12px);
  }
  75% {
    transform: rotate(180deg) translateX(12px);
  }
  100% {
    transform: rotate(360deg) translateX(12px);
  }
}
@keyframes animateDot4 {
  0% {
    transform: rotate(0) translateX(12px);
  }
  25% {
    transform: rotate(-180deg) translateX(12px);
  }
  75% {
    transform: rotate(-180deg) translateX(12px);
  }
  100% {
    transform: rotate(-360deg) translateX(12px);
  }
}
</style>