<template>
  <div class="app-container">
    <div class="card" v-for="(item, index) in article_list" :key="index">
      <span class="title">{{ item.article_title }}</span>
      <span class="content">{{ item.article_desc }}</span>
      <div class="footer"></div>
    </div>
    <Paginator
      :cur_page="Number(pagination.current_page)"
      :page_size="Number(pagination.page_size)"
      :total="Number(pagination.total)"
      @jump="jump"
    ></Paginator>
  </div>
</template>
<script>
import { getArticles } from "@/api/posts";
import Paginator from "@/components/Paginator";
export default {
  data() {
    return {
      article_list: [],
      pagination: {
        current_page: 1,
        page_size: 10,
        total: 100
      }
    };
  },
  components: {
    Paginator
  },
  created() {
    this.$nextTick(() => {
      this.get_article();
    });
  },
  mounted() {
    console.log(1111);
  },
  methods: {
    get_article() {
      getArticles(this.pagination).then(res => {
        this.article_list = res.list;
        this.pagination = res.pagination;
      });
    },
    jump(num) {
      this.pagination.current_page = Number(num);
      this.get_article();
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  border: #ebebeb 1px solid;
  margin-top: 5px;
  padding: 10px;
  border-radius: 3px;
  height: 150px;
  padding-top: 5px;
  cursor: default;
  &:hover {
    box-shadow: 0px 0px 3px 3px #e6e6e6;
    transition: all 0.5s;
  }
  .title {
    display: block;
    border-bottom: 1px solid #e8eaec;
    line-height: 1;
    font-weight: 600;
    font-size: 22px;
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
