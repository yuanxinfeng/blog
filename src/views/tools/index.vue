<!--
 * @Description: tools
 * @Author: Jasper
 * @Github: https://github.com/yuanxinfeng
 * @Date: 2020-01-13 15:56:31
 * @LastEditors: Jasper
 * @LastEditTime: 2020-04-17 14:17:12
 -->
<template>
  <div class="tools">
    <iframe :src="url" frameborder="0"></iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "",
      toolsData: []
    };
  },
  created() {
    this.url = "https://yuanxinfeng.xyz/tools.html";
  }
};
</script>

<style lang="scss" scoped>
.tools {
  padding: 5px 10px;
  height: 100%;
  width: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
