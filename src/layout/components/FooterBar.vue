<template>
  <footer>
    <div class="container">
      <div class="copyright">
        <p>Copyright © 2018-2019 SegmentFault. 当前呈现版本 1.02.17</p>
      </div>
      <div class="online-time">
        <p>本站已运行：{{ time }}</p>
      </div>
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
  background: #f7f7f7;
  color: #666;
  width: 100%;
  height: 220px;
  display: table;
  position: relative;
  .copyright{
    font-size: 13px;
    text-align: center;    
    padding: 20px 10px 10px 10px;
    @media only screen and (max-width: 768px) {
      & {
        padding: 0 10px 10px 10px !important;
      }
    }
  }
  .online-time {
    width: 350px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -175px;
    p {
      font-size: 16px;
      padding-bottom: 10px;
      text-align: center;
    }
  }
}
@media screen and (max-width: 480px) {
  footer {
    padding: 20px 10px;
    height: 100px !important;
  }
}
</style>
