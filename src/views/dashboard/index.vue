<template>
  <div class="app-container">
    <Card class="card" v-for="(item, index) in posts" :key="index">
      <span class="title">{{ item.title }}</span>
      <span class="content">{{ item.content }}</span>
      <div class="footer"></div>
    </Card>
  </div>
</template>
<script>
import { Card } from "iview";
import { getPosts } from "@/api/posts";
export default {
  data() {
    return {
      posts: [
        {
          id: "",
          title: "",
          content: "",
          label: [
            {
              id: "",
              title: ""
            }
          ],
          creatTime: "",
          read: ""
        }
      ]
    };
  },
  components: {
    Card
  },
  created() {
    this.$nextTick(() => {
      getPosts().then(res => {
        this.posts = res.posts;
      });
    });
  },
  mounted() {
    console.log(1111);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.card {
  padding: 15px;
  .ivu-card-body {
    padding: 0px 0px 28px 0;
  }
  .title {
    display: block;
    border-bottom: 1px solid #e8eaec;
    line-height: 1;
    font-weight: 600;
    font-size: 17px;
    padding: 5px;
  }
  .content {
    text-align: justify;
    word-break: break-all;
    min-height: 38px;
    opacity: 1;
    transition: opacity 0.4s ease-out;
    padding: 5px;
  }
  .footer {
    float: right;
    font-size: 15px;
    color: #999;
    margin-top: 5px;
  }
}
</style>
