<template>
  <footer>
    <div>
      <p>参考网址：</p>
      <div class="links">
        <a target="_blank" href="https://cnodejs.org/">CNode技术社区</a>
        <a target="_blank" href="https://cn.vuejs.org/">Vue.js官网</a>
      </div>
    </div>
    <div class="online-time">
      <p>本站已运行：{{time}}</p>
    </div>
  </footer>
</template>

<script>
import { formatDuring } from "@/utils";
import { getCreateTime } from "@/api/createTime";

export default {
  data() {
    return {
      time: "",
      create_time: "",
      interval: null
    };
  },
  created() {
    this.$nextTick(function() {
      getCreateTime().then(res => {
        this.create_time = res.create_time;
        this.time = formatDuring(res.create_time);
      });
      const _this = this;
      _this.interval = setInterval(function() {
        _this.time = formatDuring(_this.create_time);
      }, 1000);
    });
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style lang="scss" scoped>
footer {
  background: rgb(38, 50, 56);
  color: #fff;
  height: 220px;
  position: relative;
  .online-time {
    width: 350px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -175px;
  }
}

div {
  padding-bottom: 20px;
}

footer div:last-child {
  padding-bottom: 0;
}

p {
  font-size: 16px;
  padding-bottom: 10px;
}

a {
  margin-right: 20px;
}
@media screen and (max-width: 480px) {
  footer {
    padding: 20px 10px;
    height: 100px !important;
  }
}
</style>
