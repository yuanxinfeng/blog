<!--
 * @Description: 
 * @Author: Jasper
 * @Github: https://github.com/yuanxinfeng
 * @Date: 2019-05-15 10:58:18
 * @LastEditors: Jasper
 * @LastEditTime: 2020-04-14 14:43:42
 -->
<template>
  <footer>
    <div class="container">
      <div class="copyright">
        <p>
          Copyright © 2018-2020
          <a href="https://yuanxinfeng.xyz" target="_blank">YuanXinFeng</a>.
          当前呈现版本 1.02.18
          <a href="http://www.beian.miit.gov.cn" target="_blank"
            >鲁ICP备20001365号-1</a
          >
        </p>
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
  .copyright {
    font-size: 13px;
    text-align: center;
    padding: 20px 10px 10px 10px;
    @media only screen and (max-width: 480px) {
      & {
        padding: 2px 10px 10px 10px !important;
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
